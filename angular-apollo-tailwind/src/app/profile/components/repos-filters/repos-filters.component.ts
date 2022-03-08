import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs';
import {
  LanguageFilter,
  TypeFilter,
} from '../../../components/filters/filter.models';
import { ProfileFilterState } from '../../../components/filters/profile-repos-filter-store';
import { RepositoryOrderField } from '../../../gql';

const TYPE_FILTERS = [
  {
    label: 'All',
    value: TypeFilter.ALL,
  },
  {
    label: 'Forks',
    value: TypeFilter.FORKED,
  },
  {
    label: 'Archived',
    value: TypeFilter.ARCHIVED,
  },
];

const SORT_ITEMS = [
  {
    value: RepositoryOrderField.UpdatedAt,
    label: 'Last updated',
  },
  { value: RepositoryOrderField.Name, label: 'Name' },
  { value: RepositoryOrderField.Stargazers, label: 'Stars' },
];

@Component({
  selector: 'app-repos-filters',
  templateUrl: './repos-filters.component.html',
  styleUrls: ['./repos-filters.component.css'],
})
export class ReposFiltersComponent {
  @Input() state!: ProfileFilterState;
  @Input() resultCount?: number | null = null;
  @Input() hasActiveFilters: boolean | null = false;
  @Input() isQueryActive: boolean | null = false;
  @Input() isTypeActive: boolean | null = false;
  @Input() isLanguageActive: boolean | null = false;

  sortType = '';
  searchInput = new FormControl();

  @Output() search = this.searchInput.valueChanges.pipe(
    map((term: string) => term),
  );
  @Output() setType = new EventEmitter<string>();
  @Output() setLanguage = new EventEmitter<string>();
  @Output() setLanguages = new EventEmitter<LanguageFilter[]>();
  @Output() setSort = new EventEmitter<string>();
  @Output() setQuery = new EventEmitter<string>();
  @Output() clearFilters = new EventEmitter();

  readonly typeFilters = TYPE_FILTERS;
  readonly sortItems = SORT_ITEMS;

  handleTypeClick(type: string) {
    this.setType.emit(type);
  }

  handleLanguageClick(type: string) {
    this.setLanguage.emit(type);
  }

  handleLanguagesClick(type: LanguageFilter[]) {
    this.setLanguages.emit(type);
  }

  handleSortClick(type: string) {
    this.setSort.emit(type);
  }

  handleQueryClick(type: string) {
    this.setQuery.emit(type);
  }

  handleClearFiltersClick() {
    this.clearFilters.emit();
  }
}
