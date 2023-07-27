import { render } from '@testing-library/react-native';
import { useRepoInfoStore } from '../../hooks/stores';
import RepoHeading from './RepoHeading';

jest.mock('../../hooks/stores', () => ({
  useRepoInfoStore: jest.fn(),
}));

describe('RepoHeading', () => {
  const mockUseRepoInfoStore = useRepoInfoStore as jest.MockedFunction<typeof useRepoInfoStore>;

  beforeEach(() => {
    mockUseRepoInfoStore.mockReturnValue({
      name: 'my-repo',
      owner: 'my-org',
      info: { visibility: 'public', isOrg: false },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render', () => {
    const { container } = render(<RepoHeading />);
    expect(container).toBeTruthy();
  });

  it('renders the owner link to have an onClick function', () => {
    const { getByTestId } = render(<RepoHeading />);
    const ownerLink = getByTestId('owner-link');
    expect(ownerLink.props.onClick).toBeTruthy();
  });

  it('renders the owner text with the correct text', () => {
    const { getByTestId } = render(<RepoHeading />);
    const ownerText = getByTestId('owner-text');
    expect(ownerText.props.children).toBe('my-org');
  });

  it('renders the name link to have an onClick function', () => {
    const { getByTestId } = render(<RepoHeading />);
    const nameLink = getByTestId('name-link');
    expect(nameLink.props.onClick).toBeTruthy();
  });

  it('renders the name text with the correct text', () => {
    const { getByTestId } = render(<RepoHeading />);
    const nameText = getByTestId('name-text');
    expect(nameText.props.children).toBe('my-repo');
  });

  it('renders the PrivacyBadge component when info.visibility is truthy', () => {
    const { getByTestId } = render(<RepoHeading />);
    const privacyBadge = getByTestId('privacy-badge');
    expect(privacyBadge).toBeDefined();
  });

  it('does not render the PrivacyBadge component when info.visibility is falsy', () => {
    mockUseRepoInfoStore.mockReturnValue({
      name: 'my-repo',
      owner: 'my-org',
      info: { visibility: null, isOrg: false },
    });
    const { queryByTestId } = render(<RepoHeading />);
    const privacyBadge = queryByTestId('privacy-badge');
    expect(privacyBadge).toBeNull();
  });
});
