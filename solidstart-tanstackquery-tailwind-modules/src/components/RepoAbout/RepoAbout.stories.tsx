import { Router } from '@solidjs/router';
import { RepoAboutWidget } from './RepoAbout';

export default {
  title: 'Components/RepoAboutWidget',
};

const Template = () => (
  <Router>
    <RepoAboutWidget />
  </Router>
);

export const Default: any = Template.bind({});
