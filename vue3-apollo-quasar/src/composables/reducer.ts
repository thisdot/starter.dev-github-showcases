import { reactive } from 'vue';

export const useReducer = (reducer, iState) => {
  const state = reactive(iState);
  const dispatch = (action) => {
    reducer(state, action);
  };
  return [state, dispatch];
};
