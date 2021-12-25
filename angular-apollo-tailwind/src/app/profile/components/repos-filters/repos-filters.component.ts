import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  LanguageFilter,
  ORDER_BY_FIELD,
  ProfileFilterState,
} from '@filter-store';
import { map } from 'rxjs';
import { TypeFilter } from '@filter-store';

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
    value: ORDER_BY_FIELD.UpdatedAt,
    label: 'Last updated',
  },
  { value: ORDER_BY_FIELD.Name, label: 'Name' },
  { value: ORDER_BY_FIELD.Stargazers, label: 'Stars' },
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
