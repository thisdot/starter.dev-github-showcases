import type { FilterDropdownOption } from '../FilterDropdown/filter-option';

export interface RepoFiltersState {
  type?: FilterDropdownOption;
  language?: FilterDropdownOption;
  sort?: FilterDropdownOption;
  searchInput?: string;
}
