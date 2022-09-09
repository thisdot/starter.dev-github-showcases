import { reactive } from 'vue';
import {
  FilterAction,
  LanguageFilter,
  RepositoryOrderField,
  TypeFilter,
} from '@/components/RepoFilters/useRepoFilters';
interface State {
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
type Dispatch = (data: FilterAction) => void;

type Reducer = (state: State, action: FilterAction) => State;

type UseReducer = [State, Dispatch];

export const useReducer = (reducer: Reducer, iState: State): UseReducer => {
  const state = reactive(iState);
  const dispatch: Dispatch = (action: FilterAction) => {
    reducer(state, action);
  };
  return [state, dispatch];
};
