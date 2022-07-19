import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  debounceTime,
  distinctUntilChanged,
  combineLatest,
  Subject,
} from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { setSortAndFilterProperties } from 'src/app/state/profile/profile.actions';
import {
  filteredLanguages,
  hasActiveSortAndFilters,
  isActiveFilterByLanguage,
  isActiveFilterByType,
  selectFilterByLanguage,
  selectFilterBySearch,
  selectFilterByType,
  selectReposCount,
} from 'src/app/state/profile/profile.selectors';
import {
  SortAndFilterState,
  TypeFilter,
} from 'src/app/state/profile/profile.state';

const TYPE_FILTERS = [
  {
    label: 'All',
    value: TypeFilter.All,
  },
  {
    label: 'Forks',
    value: TypeFilter.Forked,
  },
  {
    label: 'Archived',
    value: TypeFilter.Archived,
  },
];

enum TypeFilter {
  All = 'all',
  Forked = 'forked',
  Archived = 'archived',
}

const TYPE_FILTERS = [
  {
    label: 'All',
    value: TypeFilter.All,
  },
  {
    label: 'Forks',
    value: TypeFilter.Forked,
  },
  {
    label: 'Archived',
    value: TypeFilter.Archived,
  },
];

@Component({
  selector: 'app-repo-controls',
  templateUrl: './repo-controls.component.html',
  styleUrls: ['./repo-controls.component.scss'],
})
export class RepoControlsComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<boolean>();

  searchInput = new FormControl('');
  typeFilter = new FormControl(TypeFilter.All);
  languageFilter = new FormControl(TypeFilter.All);
  hasActiveSortAndFilters$ = this.store.select(hasActiveSortAndFilters);

  selectReposCount$ = this.store.select(selectReposCount);

  isActiveFilterByType$ = this.store.select(isActiveFilterByType);
  isActiveFilterByLanguage$ = this.store.select(isActiveFilterByLanguage);

  selectFilterBySearch$ = this.store.select(selectFilterBySearch);
  selectFilterByType$ = this.store.select(selectFilterByType);
  selectFilterByLanguage$ = this.store.select(selectFilterByLanguage);
  filteredLanguages$ = this.store
    .select(filteredLanguages)
    .pipe((languages) => languages ?? []);

  readonly typeFilters = TYPE_FILTERS;

  readonly typeFilters = TYPE_FILTERS;

  constructor(private store: Store) {}

  ngOnInit(): void {
    const searchInput$ = this.searchInput.valueChanges.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      startWith(''),
    );

    const typeFilter$ = this.typeFilter.valueChanges.pipe(
      distinctUntilChanged(),
      startWith(null),
    );

    const languageFilter$ = this.languageFilter.valueChanges.pipe(
      distinctUntilChanged(),
      startWith(null),
    );

    combineLatest(
      [searchInput$, typeFilter$, languageFilter$],
      (search: string, type: string, language: string) => ({
        search,
        type,
        language,
      }),
    )
      .pipe(takeUntil(this.destroy$))
      .subscribe((filters: SortAndFilterState) => {
        this.store.dispatch(setSortAndFilterProperties({ filters }));
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  handleClearFiltersClick(): void {
    this.searchInput.reset();
    this.typeFilter.setValue(TypeFilter.All);
    this.languageFilter.setValue(TypeFilter.All);
  }

  handleTypeClick(type: string) {
    this.typeFilter.setValue(type);
  }

  handleLanguageClick(language: string) {
    this.languageFilter.setValue(language);
  }
}
