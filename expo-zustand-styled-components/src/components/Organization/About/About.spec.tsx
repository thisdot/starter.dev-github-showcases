import About from './About';
import { render } from '@testing-library/react-native';

describe('About', () => {
  it('should mount', () => {
    const wrapper = render(<About name='name' avatarUrl='url' />);
    expect(wrapper).toBeTruthy();
  });

  it('should show content', async () => {
    const wrapper = render(<About name='name' avatarUrl='url' />);
    const name = wrapper.getByText('name');
    expect(name).toBeDefined();
  });
});
