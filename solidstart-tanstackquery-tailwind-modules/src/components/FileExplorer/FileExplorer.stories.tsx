import { QueryClient, QueryClientProvider } from '@tanstack/solid-query';
import { Router } from '@solidjs/router';
import FileExplorer from './FileExplorer';
import { mockRepoTree } from '../../../msw/mockRepoTree';

export default {
  title: 'Components/File Explorer',
  component: FileExplorer,
};

const data = {
  branch: 'main',
  owner: 'tanstack',
  name: 'solidstart',
  path: '',
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
      <FileExplorer {...data} />
    </Router>
  </QueryClientProvider>
);

export const RootDir: any = Template.bind({});

RootDir.parameters = {
  msw: {
    handlers: [mockRepoTree],
  },
};
