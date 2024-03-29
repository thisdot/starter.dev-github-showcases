import { useReducer } from '../../composables/reducer';

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum RepositoryOrderField {
  CreatedAt = 'CREATED_AT',
  Name = 'NAME',
  PushedAt = 'PUSHED_AT',
  Stargazers = 'STARGAZERS',
  UpdatedAt = 'UPDATED_AT',
}

export type FiltersAPI = ReturnType<typeof useRepoFilters>;

export enum TypeFilter {
  ALL = 'all',
  FORKS = 'forked',
  ARCHIVED = 'archived',
}

export interface LanguageFilter {
  label: string;
  value: string;
}

export enum ActionType {
  CHANGE_SORT,
  CHANGE_LANGUAGE,
  CHANGE_TYPE,
  SET_QUERY,
  SET_LANGUAGES,
  CHANGE_PAGE,
  RESET_FILTERS,
}

export interface FilterState {
  sort: RepositoryOrderField;
  query: string;
  language: string;
  type: TypeFilter;
  languages?: LanguageFilter[];
  afterCursor?: string | null;
  beforeCursor?: string | null;
  first?: number;
  last?: number;
}

export type FilterAction =
  | {
      type: ActionType.CHANGE_SORT;
      payload: { sort: RepositoryOrderField };
    }
  | {
      type: ActionType.CHANGE_LANGUAGE;
      payload: { language: string };
    }
  | {
      type: ActionType.CHANGE_TYPE;
      payload: { type: TypeFilter };
    }
  | {
      type: ActionType.SET_QUERY;
      payload: { query: string };
    }
  | {
      type: ActionType.SET_LANGUAGES;
      payload: { languages: LanguageFilter[] };
    }
  | {
      type: ActionType.CHANGE_PAGE;
      payload: {
        afterCursor?: string | null;
        beforeCursor?: string | null;
        first?: number | undefined;
        last?: number | undefined;
      };
    }
  | {
      type: ActionType.RESET_FILTERS;
    };

export const initialState: FilterState = {
  sort: RepositoryOrderField.UpdatedAt,
  type: TypeFilter.ALL,
  language: 'all',
  query: '',
  languages: undefined,
  first: 25,
};

const reducer = (state: FilterState, action: FilterAction) => {
  switch (action.type) {
    case ActionType.CHANGE_SORT:
      return {
        ...state,
        sort: action.payload.sort,
        afterCursor: undefined,
        beforeCursor: undefined,
      };
    case ActionType.CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload.language,
        afterCursor: undefined,
        beforeCursor: undefined,
      };
    case ActionType.CHANGE_TYPE:
      return {
        ...state,
        type: action.payload.type,
        afterCursor: undefined,
        beforeCursor: undefined,
      };
    case ActionType.SET_QUERY:
      return {
        ...state,
        query: action.payload.query,
        afterCursor: undefined,
        beforeCursor: undefined,
      };
    case ActionType.CHANGE_PAGE:
      return {
        ...state,
        afterCursor: action.payload.afterCursor,
        beforeCursor: action.payload.beforeCursor,
        first: action.payload.first,
        last: action.payload.last,
      };
    case ActionType.RESET_FILTERS:
      return {
        ...state,
        sort: RepositoryOrderField.UpdatedAt,
        type: TypeFilter.ALL,
        language: 'all',
        query: '',
        afterCursor: undefined,
        beforeCursor: undefined,
      };
    default:
      return state;
  }
};

interface UseRepoFilters {
  state: FilterState;
  changeSort: (value: RepositoryOrderField) => void;
  changeLanguage: (value: string) => void;
  changeType: (value: string) => void;
  setQuery: (value: string) => void;
  setLanguages: (value: LanguageFilter[]) => void;
  resetFilters: () => void;
  changePage: (data: { after: string; before: string }) => void;
  isQueryActive: boolean;
  isTypeActive: boolean;
  isLanguageActive: boolean;
  isFiltersActive: boolean;
}

export function useRepoFilters(): UseRepoFilters {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeSort = (sort: RepositoryOrderField) => {
    dispatch({
      type: ActionType.CHANGE_SORT,
      payload: { sort },
    });
  };

  const changeLanguage = (language: string) => {
    dispatch({
      type: ActionType.CHANGE_LANGUAGE,
      payload: { language },
    });
  };

  const changeType = (type: TypeFilter) => {
    dispatch({
      type: ActionType.CHANGE_TYPE,
      payload: { type },
    });
  };

  const setQuery = (query: string) => {
    dispatch({
      type: ActionType.SET_QUERY,
      payload: { query },
    });
  };

  const setLanguages = (languages: LanguageFilter[]) => {
    dispatch({
      type: ActionType.SET_LANGUAGES,
      payload: { languages },
    });
  };

  const changePage = ({
    after,
    before,
  }: {
    after?: string | null;
    before?: string | null;
  }) => {
    dispatch({
      type: ActionType.CHANGE_PAGE,
      payload: {
        afterCursor: after,
        beforeCursor: before,
        first: after ? 25 : undefined,
        last: before ? 25 : undefined,
      },
    });
  };

  const resetFilters = () => {
    dispatch({
      type: ActionType.RESET_FILTERS,
    });
  };

  const isQueryActive = state.query !== '';
  const isTypeActive = state.type !== TypeFilter.ALL;
  const isLanguageActive = state.language !== 'all';
  const isFiltersActive = isQueryActive || isTypeActive || isLanguageActive;

  return {
    state,
    changeSort,
    changeLanguage,
    changeType,
    setQuery,
    setLanguages,
    resetFilters,
    changePage,
    isQueryActive,
    isTypeActive,
    isLanguageActive,
    isFiltersActive,
  };
}
