import { Component, OnInit } from '@angular/core';
import { ProfileReposFilterStore } from '../../components/filters/profile-repos-filter-store';
import { Observable } from 'rxjs';
import { ProfileReposStore } from './profile-repos.store';
import { LanguageFilter } from 'src/app/components/filters/filter.models';
import { Repo, PaginationEvent } from 'src/app/gql';

@Component({
  selector: 'app-profile-repos-view',
  templateUrl: './profile-repos-view.component.html',
  providers: [ProfileReposFilterStore, ProfileReposStore],
})
export class ProfileReposViewComponent implements OnInit {
  readonly userRepos$: Observable<Repo[] | undefined> =
    this.profileReposStore.repos$;
  readonly reposLoadError$: Observable<unknown | undefined> =
    this.profileReposStore.reposLoadError$;
  readonly resultCount$ = this.profileReposStore.resultCount$;
  readonly pageInfo$ = this.profileReposStore.pageInfo$;

  // Profile Repos Filters Store selectors
  readonly filterState$ = this.profileReposFilterStore.state$;
  readonly hasActiveFilters$ = this.profileReposFilterStore.hasActiveFilters$;
  readonly isQueryActive$ = this.profileReposFilterStore.isQueryActive$;
  readonly isTypeActive$ = this.profileReposFilterStore.isTypeActive$;
  readonly isLanguageActive$ = this.profileReposFilterStore.isLanguageActive$;

  repoPath = '';

  constructor(
    private profileReposStore: ProfileReposStore,
    private profileReposFilterStore: ProfileReposFilterStore,
  ) {}

  ngOnInit(): void {
    this.profileReposStore.getRepos(this.filterState$);
  }

  search(term: string) {
    // FormControl emits event on input clear
    if (typeof term === 'string') {
      this.profileReposFilterStore.setQuery(term);
      this.profileReposStore.search(this.filterState$);
    }
  }

  setType(type: string) {
    this.profileReposFilterStore.setType(type);
    this.profileReposStore.getRepos(this.filterState$);
  }

  setLanguage(language: string) {
    this.profileReposFilterStore.setLanguage(language);
    this.profileReposStore.getRepos(this.filterState$);
  }

  setLanguages(languages: LanguageFilter[]) {
    this.profileReposFilterStore.setLanguages(languages);
    this.profileReposStore.getRepos(this.filterState$);
  }

  setSort(sort: string) {
    this.profileReposFilterStore.setSort(sort);
    this.profileReposStore.getRepos(this.filterState$);
  }

  setQuery(query: string) {
    this.profileReposFilterStore.setQuery(query);
    this.profileReposStore.getRepos(this.filterState$);
  }

  changePage(page: PaginationEvent) {
    this.profileReposFilterStore.changePage(page);
    this.profileReposStore.getRepos(this.filterState$);
  }

  clearFilters() {
    this.profileReposFilterStore.clearFilters();
    this.profileReposStore.getRepos(this.filterState$);
  }
}
