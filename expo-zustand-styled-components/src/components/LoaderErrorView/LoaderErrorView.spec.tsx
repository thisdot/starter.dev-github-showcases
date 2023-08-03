import LoaderErrorView from './LoaderErrorView';
import { render } from '@testing-library/react-native';

describe('LoaderErrorView', () => {
  it('should mount', () => {
    const wrapper = render(<LoaderErrorView />);
    expect(wrapper).toBeTruthy();
  });

  it('should show the error message', () => {
    const wrapper = render(<LoaderErrorView error="error text" />);
    expect(wrapper).toBeTruthy();
    const errorMsg = wrapper.getByText('error text');
    expect(errorMsg).toBeDefined();
  });
});
