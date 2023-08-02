import { render, screen } from '@testing-library/react-native';
import PrivacyBadge from '.';

describe('Privacy Badge', () => {
  test('The PrivacyBadge component is rendered', () => {
    const visibility = 'Public';
    render(<PrivacyBadge visibility={visibility} />);
    expect(screen.getByText(visibility.toLowerCase())).toBeTruthy();
  });
});
