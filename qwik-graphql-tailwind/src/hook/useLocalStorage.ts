import { $, QRL, useClientEffect$, useStore } from '@builder.io/qwik';

export function useLocalStorage(key: string, initialState: any): [any, QRL<(value: any) => void>] {
  const store = useStore({ value: initialState });

  useClientEffect$(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialState
      store.value = item ? JSON.parse(item) : initialState;
    } catch (error) {
      // If error also return initialState
      console.log(error);
      store.value = initialState;
    }
  });

  const setValue$ = $((value: any) => {
    try {
      // Save state
      store.value = value;
      // Save to local storage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  });

  return [store.value, setValue$];
}
