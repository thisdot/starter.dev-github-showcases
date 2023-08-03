import { useContextProvider, createContext } from '@builder.io/qwik';

// Utility function to mock QwikCity routing context for storybook components
// without it, Link component will throw an error
export function storybookMockRouting() {
  useContextProvider(createContext('qc-n'), {});
  useContextProvider(createContext('qc-l'), {
    href: 'http://localhost:6006/',
    pathname: '',
    query: {},
    params: {},
  });
}
