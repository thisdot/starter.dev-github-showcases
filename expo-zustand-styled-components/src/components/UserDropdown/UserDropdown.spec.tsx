import UserDropdown from './UserDropdown';
import { fireEvent, render } from '@testing-library/react-native';

describe('User dropdown', () => {
  it('should mount', () => {
    const wrapper = render(<UserDropdown width={200} />);
    expect(wrapper).toBeTruthy();
  });

  it('should show dropdown options', async () => {
    const wrapper = render(<UserDropdown width={200} />);
    fireEvent.press(wrapper.getByTestId('profile-image'));
    const option = wrapper.getByText('Profile');
    expect(option).toBeDefined();
  });
});
