import { render } from '@testing-library/react-native';
import UserCard from '.';
import { userData } from './data';

describe('UserCard', () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = await render(<UserCard user={userData} />);
  });
  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });
  it('should display username', () => {
    const login = wrapper.getByText(userData.login);
    expect(login).toBeDefined();
  });
  it('should display name', () => {
    const name = wrapper.getByText(userData.name);
    expect(name).toBeDefined();
  });
  it('should not display location', () => {
    const location = wrapper.getByText(userData.location);
    expect(location).toBeDefined();
  });
});
