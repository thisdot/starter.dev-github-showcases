import {
  SEARCH_QUERY,
  FILTER_TYPE_QUERY,
  SORT_BY_QUERY,
  LANGUAGE_QUERY,
} from '@/components/ProfilePageLayout/query';
import { useQuery } from '@vue/apollo-composable';
import { Ref, computed } from 'vue';

import {
  defaultFilterType,
  defaultLanguage,
} from '@/components/SearchFilter/data';

type Search = {
  search: string;
};
type FilterType = {
  filterType: string;
};
type SortBy = {
  sortby: string;
};
type Language = {
  language: string;
};
interface UseSearch {
  searchData: Ref<Search>;
  filterTypeData: Ref<FilterType>;
  sortByData: Ref<SortBy>;
  languageData: Ref<Language>;
  loadingSearch: Ref<boolean>;
  loadingFilterType: Ref<boolean>;
  loadingSortBy: Ref<boolean>;
  loadingLanguage: Ref<boolean>;
  isOnlySorted: Ref<boolean>;
  isQuerying: Ref<boolean>;
}

const useSearch = (): UseSearch => {
  const { result: searchData, loading: loadingSearch } = useQuery<{
    search: string;
    loading: boolean;
  }>(SEARCH_QUERY);

  const { result: filterTypeData, loading: loadingFilterType } = useQuery<{
    filterType: string;
    loading: boolean;
  }>(FILTER_TYPE_QUERY);

  const { result: sortByData, loading: loadingSortBy } = useQuery<{
    sortby: string;
    loading: boolean;
  }>(SORT_BY_QUERY);

  const { result: languageData, loading: loadingLanguage } = useQuery<{
    language: string;
    loading: boolean;
  }>(LANGUAGE_QUERY);

  const isOnlySorted = computed(
    () =>
      sortByData.value?.sortby &&
      !(
        searchData?.value?.search ||
        languageData?.value?.language !== defaultLanguage ||
        filterTypeData?.value?.filterType !== defaultFilterType
      ),
  );

  const isQuerying = computed(
    (): boolean =>
      !!(
        loadingLanguage ||
        loadingFilterType ||
        loadingSearch ||
        loadingSortBy
      ),
  );

  return {
    searchData,
    filterTypeData,
    sortByData,
    languageData,
    loadingSearch,
    loadingFilterType,
    loadingSortBy,
    loadingLanguage,
    isOnlySorted,
    isQuerying,
  };
};

export { useSearch };
