import { useRepoInfoStore } from '../../hooks/stores';
import RepoAbout from './RepoAbout';
import { render } from '@testing-library/react-native';

describe('RepoAbout', () => {
  it('should mount', () => {
    const wrapper = render(<RepoAbout />);
    expect(wrapper).toBeTruthy();
  });

  it('should show contents', async () => {
    useRepoInfoStore.setState({
      info: {
        isPrivate: true,
        visibility: 'Private',
        forkCount: 1,
        description: 'description',
        homepageUrl: 'url',
        stargazerCount: 1,
        watcherCount: 1,
        openIssueCount: 1,
        topics: [],
        isOrg: true,
        openPullRequestCount: 1,
      },
    });

    const wrapper = render(<RepoAbout />);
    expect(wrapper).toBeTruthy();
    const description = wrapper.getByText('description');
    expect(description).toBeDefined();
    const homepageUrl = wrapper.getByText('url');
    expect(homepageUrl).toBeDefined();
  });
});
