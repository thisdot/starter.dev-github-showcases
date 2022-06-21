// import { readonly, ref } from 'vue';

// export function useReducer(reducer, initialArg, init) {
//   const state = ref(init ? init(initialArg) : initialArg);
//   const dispatch = (action) => {
//     state.value = reducer(state.value, action);
//   };

//   return [readonly(state), dispatch];
// }
import { reactive } from 'vue';

export const useReducer = (reducer, iState) => {
  const state = reactive(iState);
  const dispatch = (action) => {
    reducer(state, action);
  };
  return [state, dispatch];
};
