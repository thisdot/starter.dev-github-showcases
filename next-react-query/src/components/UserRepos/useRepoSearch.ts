import type { Filter } from '@hooks/useFilters';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useFilters } from '@hooks/useFilters';
import { getBasePath } from '@lib/pathUtils';

export function useRepoSearch(username: string, filters: Filter[]) {
  const { query, pathname, ...router } = useRouter();
  const currentQueryString = new URLSearchParams(window.location.search);
  const basePath = getBasePath(pathname, query);

  const filtersWithDefaultValues = filters.map(({ name, value }) => {
    const queryStringValue = currentQueryString.get(name);
    if (!value && !!queryStringValue) {
      return { name, value: queryStringValue };
    }
    return { name, value };
  });

  const { setFilter, hasActiveFilters, queryString } = useFilters(
    filtersWithDefaultValues
  );

  useEffect(() => {
    if (queryString !== '') {
      router.push(`${basePath}?${queryString}`, `${basePath}?${queryString}`, {
        shallow: true,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryString, basePath]);

  let searchQueryString = '';

  

  return { setFilter, hasActiveFilters };
}
