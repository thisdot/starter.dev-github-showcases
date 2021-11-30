import { useReducer } from 'react';
import { RepositoryOrderField } from '@lib/github';

export type FiltersAPI = ReturnType<typeof useRepoFilters>;

export enum TypeFilter {
  ALL,
  FORKS,
  ARCHIVED,
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
    };

const initialState: FilterState = {
  sort: RepositoryOrderField.UpdatedAt,
  type: TypeFilter.ALL,
  language: 'all',
  query: '',
  languages: undefined,
};

const reducers = (state: FilterState, action: FilterAction) => {
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
    default:
      return state;
  }
};

export function useRepoFilters() {
  const [state, dispatch] = useReducer(reducers, initialState);

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

  return {
    state,
    changeSort,
    changeLanguage,
    changeType,
    setQuery,
    setLanguages,
  };
}
