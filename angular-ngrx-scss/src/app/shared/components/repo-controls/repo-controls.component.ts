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
  hasActiveSortAndFilters,
  selectFilterBySearch,
  selectReposCount,
} from 'src/app/state/profile/profile.selectors';
import { SortAndFilterState } from 'src/app/state/profile/profile.state';

@Component({
  selector: 'app-repo-controls',
  templateUrl: './repo-controls.component.html',
  styleUrls: ['./repo-controls.component.scss'],
})
export class RepoControlsComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<boolean>();

  searchInput = new FormControl('');
  hasActiveSortAndFilters$ = this.store.select(hasActiveSortAndFilters);
  selectReposCount$ = this.store.select(selectReposCount);
  selectFilterBySearch$ = this.store.select(selectFilterBySearch);

  constructor(private store: Store) {}

  ngOnInit(): void {
    const searchInput$ = this.searchInput.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      startWith(''),
    );

    combineLatest([searchInput$], (search: string) => ({
      search,
    }))
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
  }
}
