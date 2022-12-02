import { Router } from '@solidjs/router';
import { RepoAboutWidget } from './RepoAbout';
import { aboutData } from './data';
export default {
  title: 'Components/RepoAboutWidget',
  parameters: {
    mockData: [
      {
        ...aboutData
      },
    ],
  },
};

const Template = (args) => (
    <Router>
        <RepoAboutWidget {...args} />
    </Router>
);

export const Default = Template.bind({});


Default.args = {
    info: {
        data: {
            description: 'This is a description',
            homepageUrl: 'https://www.google.com',
            topics: ['topic1', 'topic2', 'topic3']
        }
    }
};
