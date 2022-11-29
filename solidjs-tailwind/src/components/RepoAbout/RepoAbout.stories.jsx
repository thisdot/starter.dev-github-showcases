import { Router } from '@solidjs/router';
import { RepoAboutWidget } from './RepoAbout';

export default {
  title: 'Components/RepoAboutWidget',
  parameters: {
    mockData: [
      {
        info: {
            data: {
                description: 'This is a description',
                homepageUrl: 'https://www.google.com',
                topics: ['topic1', 'topic2', 'topic3']
            }
        }
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