import { Router } from '@solidjs/router';
import { RepoProvider } from '../../contexts/RepoContext';
import RepoReadMe from './RepoReadMe';

export default {
  title: 'Components/RepoReadMe',
  parameters: {
    mockData: [
      {
        readme: {
          isLoading: false,
          text: `
                # This is a title
                
                - here's
                - a
                - list
            `,
          error: undefined,
        },
      },
    ],
  },
};

const Template = (args) => (
  <Router>
    <RepoProvider readme={args.readme}>
      <RepoReadMe />
    </RepoProvider>
  </Router>
);

export const Default = Template.bind({});

Default.args = {
  readme: {
    isLoading: false,
    text: `
            # This is a title
            
            - here's
            - a
            - list
        `,
    error: undefined,
  },
};
