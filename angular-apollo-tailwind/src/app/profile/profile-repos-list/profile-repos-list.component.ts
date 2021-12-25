import { Component, OnInit } from '@angular/core';
import { LanguageFilter, ProfileReposFilterStore } from '@filter-store';
import { Observable } from 'rxjs';
import { UserRepoDetails } from 'src/app/gql';
import { ProfileReposStore } from './profile-repos.store';

@Component({
  selector: 'app-profile-repos-list',
  templateUrl: './profile-repos-list.component.html',
  styleUrls: ['./profile-repos-list.component.css'],
  providers: [ProfileReposFilterStore, ProfileReposStore],
})
export class ProfileReposListComponent implements OnInit {
  readonly profileReposDetails$: Observable<UserRepoDetails> =
    this.profileReposStore.reposDetails$;
  readonly resultCount$ = this.profileReposStore.resultCount$;

  // Profile Repos Filters Store selectors
  readonly filterState$ = this.profileReposFilterStore.state$;
  readonly hasActiveFilters$ = this.profileReposFilterStore.hasActiveFilters$;
  readonly isQueryActive$ = this.profileReposFilterStore.isQueryActive$;
  readonly isTypeActive$ = this.profileReposFilterStore.isTypeActive$;
  readonly isLanguageActive$ = this.profileReposFilterStore.isLanguageActive$;

  constructor(
    private profileReposStore: ProfileReposStore,
    private profileReposFilterStore: ProfileReposFilterStore,
  ) {}

  ngOnInit(): void {
    this.profileReposStore.getProfileRepos(this.filterState$);
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
    this.profileReposStore.getProfileRepos(this.filterState$);
  }

  setLanguage(language: string) {
    this.profileReposFilterStore.setLanguage(language);
    this.profileReposStore.getProfileRepos(this.filterState$);
  }

  setLanguages(languages: LanguageFilter[]) {
    this.profileReposFilterStore.setLanguages(languages);
    this.profileReposStore.getProfileRepos(this.filterState$);
  }

  setSort(sort: string) {
    this.profileReposFilterStore.setSort(sort);
    this.profileReposStore.getProfileRepos(this.filterState$);
  }

  setQuery(query: string) {
    this.profileReposFilterStore.setQuery(query);
    this.profileReposStore.getProfileRepos(this.filterState$);
  }

  clearFilters() {
    this.profileReposFilterStore.clearFilters();
    this.profileReposStore.getProfileRepos(this.filterState$);
  }
}
