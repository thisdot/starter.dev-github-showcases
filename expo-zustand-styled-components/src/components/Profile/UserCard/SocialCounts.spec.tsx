import { render } from '@testing-library/react-native';
import SocialCounts from './SocialCounts';

describe('Social counts', () => {
  const props = {
    followers: 4,
    following: 3,
    starredRepositories: 0,
  };

  it('should mount', () => {
    const wrapper = render(<SocialCounts />);
    expect(wrapper).toBeTruthy();
  });

  it('should display followers count', () => {
    const wrapper = render(<SocialCounts followers={props.followers} />);
    const followersText = wrapper.getByText(`${props.followers} followers`);
    expect(followersText).toBeDefined();
  });

  it('should display stared repo count', () => {
    const wrapper = render(<SocialCounts starredRepositories={props.starredRepositories} />);
    const starredRepositoriesText = wrapper.getByText(`${props.starredRepositories}`);
    expect(starredRepositoriesText).toBeDefined();
  });
});
