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
  selectSortFilter,
} from 'src/app/state/profile/profile.selectors';
import {
  OrderField,
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

const SORT_ITEMS = [
  {
    label: 'Last updated',
    value: OrderField.UpdatedAt,
  },
  { value: OrderField.Name, label: 'Name' },
  { value: OrderField.Stargazers, label: 'Stars' },
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
  sortFilter = new FormControl(OrderField.UpdatedAt);
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
  selectSortFilter$ = this.store.select(selectSortFilter);

  readonly typeFilters = TYPE_FILTERS;
  readonly sortItems = SORT_ITEMS;

  constructor(private store: Store) {}

  ngOnInit(): void {
    const searchInput$ = this.searchInput.valueChanges.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      startWith(''),
    );

    const typeFilter$ = this.typeFilter.valueChanges.pipe(
      distinctUntilChanged(),
      startWith(TypeFilter.All),
    );

    const languageFilter$ = this.languageFilter.valueChanges.pipe(
      distinctUntilChanged(),
      startWith(TypeFilter.All),
    );

    const sortFilter$ = this.sortFilter.valueChanges.pipe(
      distinctUntilChanged(),
      startWith(null),
    );

    combineLatest(
      [searchInput$, typeFilter$, languageFilter$, sortFilter$],
      (search: string, type: string, language: string, sort: string) => ({
        search,
        type,
        language,
        sort,
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

  handleTypeClick(type: string) {
    this.typeFilter.setValue(type);
  }

  handleLanguageClick(language: string) {
    this.languageFilter.setValue(language);
  }

  handleSortClick(sort: string) {
    this.sortFilter.setValue(sort);
  }

  handleClearClick(): void {
    this.searchInput.reset();
    this.typeFilter.reset();
    this.languageFilter.reset();
    this.sortFilter.reset();
  }
}
