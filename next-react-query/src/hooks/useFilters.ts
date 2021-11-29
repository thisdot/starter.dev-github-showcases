import { useState } from 'react';

export interface Filter {
  name: string;
  value?: string;
}

export function useFilters(filters: Filter[]) {
  const [filterMap, setFilterMap] = useState<Record<string, string>>(
    filters.reduce(
      (acc, filter) => ({ ...acc, [filter.name]: filter.value }),
      {}
    )
  );

  const activeFilters: Record<string, string> = Object.entries(
    filterMap
  ).reduce(
    (acc, [name, value]) => (Boolean(value) ? { ...acc, [name]: value } : acc),
    {}
  );

  const hasActiveFilters = Object.keys(activeFilters).length > 0;
  const queryString = new URLSearchParams(activeFilters).toString();

  const setFilter = (name: string, value: string) => {
    if (filterMap.hasOwnProperty(name)) {
      setFilterMap((currentFilterMap) => ({
        ...currentFilterMap,
        [name]: value,
      }));
    }
  };

  return { hasActiveFilters, setFilter, filterMap, queryString };
}
