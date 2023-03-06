import UserDropdown from './UserDropdown';
import { fireEvent, render } from '@testing-library/react-native';

describe('User dropdown', () => {
  const data = {
    username: 'hdjerry',
    image: 'https://avatars.githubusercontent.com/u/22839396?v=4',
  };

  it('should mount', () => {
    const wrapper = render(<UserDropdown {...data} />);
    expect(wrapper).toBeTruthy();
  });

  it('should show dropdown options', async () => {
    const wrapper = render(<UserDropdown {...data} />);
    fireEvent.press(wrapper.getByTestId('profile-image'));
    const option = wrapper.getByText('Profile');
    expect(option).toBeDefined();
  });
});
