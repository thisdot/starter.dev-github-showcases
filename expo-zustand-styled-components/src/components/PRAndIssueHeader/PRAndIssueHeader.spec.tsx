import PRAndIssueHeader from './PRAndIssueHeader';
import { render } from '@testing-library/react-native';

describe('User dropdown', () => {
  it('should mount', () => {
    const wrapper = render(<PRAndIssueHeader cardType="pr" openCount={10} closedCount={9} />);
    expect(wrapper).toBeTruthy();
    const option = wrapper.getByText('10');
    expect(option).toBeDefined();
  });
});