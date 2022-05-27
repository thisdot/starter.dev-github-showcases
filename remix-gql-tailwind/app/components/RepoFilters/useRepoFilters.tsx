import { useReducer } from 'react';

export enum RepositoryOrderField {
  CreatedAt = 'CREATED_AT',
  Name = 'NAME',
  PushedAt = 'PUSHED_AT',
  Stargazers = 'STARGAZERS',
  UpdatedAt = 'UPDATED_AT',
}

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC',
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
  RESET_FILTERS,
}

export interface FilterState {
  sort: RepositoryOrderField;
  query: string;
  language: string;
  type: TypeFilter;
  languages?: LanguageFilter[];
}

type FilterAction =
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
      type: ActionType.RESET_FILTERS;
    };

const initialState: FilterState = {
  sort: RepositoryOrderField.UpdatedAt,
  type: TypeFilter.ALL,
  language: 'all',
  query: '',
  languages: undefined,
};

const reducer = (state: FilterState, action: FilterAction) => {
  switch (action.type) {
    case ActionType.CHANGE_SORT:
      return {
        ...state,
        sort: action.payload.sort,
      };
    case ActionType.CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload.language,
      };
    case ActionType.CHANGE_TYPE:
      return {
        ...state,
        type: action.payload.type,
      };
    case ActionType.SET_QUERY:
      return {
        ...state,
        query: action.payload.query,
      };
    case ActionType.RESET_FILTERS:
      return {
        ...state,
        sort: RepositoryOrderField.UpdatedAt,
        type: TypeFilter.ALL,
        language: 'all',
        query: '',
      };
    default:
      return state;
  }
};

export function useRepoFilters() {
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

  const resetFilters = () => {
    dispatch({
      type: ActionType.RESET_FILTERS,
    });
  };

  const isQueryActive = state.query !== '';
  const isTypeActive = state.type !== TypeFilter.ALL;
  const isLanguageActive = state.language !== 'all';
  const isSortActive = state.sort !== RepositoryOrderField.UpdatedAt;
  const isFiltersActive =
    isQueryActive || isTypeActive || isLanguageActive || isSortActive;

  return {
    state,
    changeSort,
    changeLanguage,
    changeType,
    setQuery,
    setLanguages,
    resetFilters,
    isQueryActive,
    isTypeActive,
    isLanguageActive,
    isFiltersActive,
  };
}
