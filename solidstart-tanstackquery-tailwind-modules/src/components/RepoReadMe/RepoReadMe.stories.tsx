import { Router } from '@solidjs/router';
import RepoReadMe from './RepoReadMe';
import { mockReadme } from '../../../msw/mockReadMe';
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query';

export default {
  title: 'Components/RepoReadMe',
  parameters: {
    msw: {
      handlers: [mockReadme],
    },
  },
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      staleTime: Infinity,
    },
  },
});

const Template = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <RepoReadMe />
    </Router>
  </QueryClientProvider>
);

export const Default = Template.bind({});
