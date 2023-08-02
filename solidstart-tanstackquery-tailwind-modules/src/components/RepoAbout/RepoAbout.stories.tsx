import { Router } from '@solidjs/router';
import { aboutData } from './data';
import { RepoAboutWidget } from './RepoAbout';

export default {
  title: 'Components/RepoAboutWidget',
};

const Template = () => (
  <Router>
    <RepoAboutWidget
      homepageUrl={aboutData.homepageUrl}
      description={aboutData.description}
      topics={aboutData.topics}
    />
  </Router>
);

export const Default: any = Template.bind({});
