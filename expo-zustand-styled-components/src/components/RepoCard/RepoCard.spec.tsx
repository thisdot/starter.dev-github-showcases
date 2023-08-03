import RepoCard from './RepoCard';
import { render } from '@testing-library/react-native';

const mockRepo = {
  id: 'id',
  name: 'name',
  description: 'description',
  updatedAt: '2021-01-01',
  primaryLanguage: {
    name: 'languageName',
    color: 'color',
  },
  stargazerCount: 1,
  forkCount: 2,
  visibility: 'Public',
  owner: {
    login: 'login',
  },
};

describe('RepoCard', () => {
  it('should mount and show contents', async () => {
    const wrapper = render(<RepoCard repo={mockRepo} />);
    expect(wrapper).toBeTruthy();
    const description = wrapper.getByText('description');
    expect(description).toBeDefined();
    const name = wrapper.getByText('login/name');
    expect(name).toBeDefined();
    const link = wrapper.getByRole('link');
    expect(link).toBeDefined();
    const language = wrapper.getByText('languageName');
    expect(language).toBeDefined();
    const star = wrapper.getByText('1');
    expect(star).toBeDefined();
    const fork = wrapper.getByText('2');
    expect(fork).toBeDefined();
    const visibility = wrapper.getByText('public');
    expect(visibility).toBeDefined();
    const updatedAt = wrapper.getByText('Updated ', { exact: false });
    expect(updatedAt).toBeDefined();
  });
});
