import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  debounceTime,
  distinctUntilChanged,
  combineLatest,
  Subject,
  of,
  Observable,
} from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { setSortAndFilterProperties } from 'src/app/state/profile/profile.actions';
import {
  hasActiveSortAndFilters,
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

@Component({
  selector: 'app-repo-controls',
  templateUrl: './repo-controls.component.html',
  styleUrls: ['./repo-controls.component.scss'],
})
export class RepoControlsComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<boolean>();

  searchInput = new FormControl('');
  typeFilter = new FormControl(TypeFilter.All);
  hasActiveSortAndFilters$ = this.store.select(hasActiveSortAndFilters);
  selectReposCount$ = this.store.select(selectReposCount);
  selectFilterBySearch$ = this.store.select(selectFilterBySearch);
  selectFilterByType$ = this.store.select(selectFilterByType);

  readonly typeFilters = TYPE_FILTERS;

  constructor(private store: Store) {}

  ngOnInit(): void {
    const searchInput$ = this.searchInput.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      startWith(''),
    );

    const typeFilter$ = this.typeFilter.valueChanges.pipe(
      distinctUntilChanged(),
      startWith(null),
    );

    combineLatest(
      [searchInput$, typeFilter$],
      (search: string, type: string) => ({
        search,
        type,
      }),
    )
      .pipe(takeUntil(this.destroy$))
      .subscribe((filters: SortAndFilterState) => {
        console.log(filters);
        console.log(this);
        this.store.dispatch(setSortAndFilterProperties({ filters }));
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  handleClearFiltersClick(): void {
    this.searchInput.reset();
  }

  handleTypeClick(type: string) {
    this.typeFilter.setValue(type);
  }
}
