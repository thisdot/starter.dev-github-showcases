import { render, screen } from '@testing-library/react-native';
import FileViewer from './FileViewer';
import getRepoFile from '../../services/get-repo-file';

jest.mock('../../hooks/stores', () => ({
  useRepoInfoStore: jest.fn().mockReturnValue({
    owner: 'test-owner',
    name: 'test-repo',
    file: {
      text: 'Sample text\nLine 2\nLine 3',
      byteSize: 28,
    },
    branch: 'main',
  }),
}));

jest.mock('../../services/get-repo-file', () => jest.fn().mockResolvedValue(1));

describe('FileViewer', () => {
  test('renders FileViewer with provided path and branch', () => {
    render(<FileViewer path="src/components/FileViewer.tsx" branch="main" />);
    expect(screen.getByText('3 lines')).toBeTruthy();
    expect(screen.getByText('28 Bytes')).toBeTruthy();
  });

  test('renders FileViewer with custom branch', () => {
    render(<FileViewer path="src/components/FileViewer.tsx" branch="custom-branch" />);
    expect(screen.getByText('3 lines')).toBeTruthy();
    expect(screen.getByText('28 Bytes')).toBeTruthy();
  });

  test('fetches repo file on mount', () => {
    render(<FileViewer path="src/components/FileViewer.tsx" branch="main" />);
    expect(getRepoFile).toHaveBeenCalled();
  });
});
