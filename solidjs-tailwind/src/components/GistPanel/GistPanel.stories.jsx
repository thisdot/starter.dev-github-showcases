import { Router } from '@solidjs/router';
import GistPanel from './GistPanel';
import { gists } from './data';

export default {
  title: 'Components/Gist Panel',
  parameters: {
    mockData: [
      {
        url: 'https://api.starter.dev/hello?greeting=',
        method: 'GET',
        status: 200,
        response: () => gists,
        delay: 1000,
      },
    ],
  },
};

const Template = (args) => (
  <Router>
    <GistPanel {...args} />
  </Router>
);

export const Default = Template.bind({});
