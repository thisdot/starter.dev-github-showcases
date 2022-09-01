import { reactive } from 'vue';

interface UseReducer {
  state: boolean;
  dispatch: (data: unknown) => unknown;
}

export const useReducer = (reducer, iState): UseReducer[] => {
  const state = reactive(iState);
  const dispatch = (action) => {
    reducer(state, action);
  };
  return [state, dispatch];
};
