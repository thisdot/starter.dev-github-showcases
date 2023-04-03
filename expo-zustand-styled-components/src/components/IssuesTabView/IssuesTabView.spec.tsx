
import { render, act } from '@testing-library/react-native';
import IssuesTabView from '.';
import { NavigationContainer } from '@react-navigation/native';
import { usePRAndIssueHeaderStore } from '../../hooks/stores';
import { issuesTestData } from './data';

describe('Issues Tab View', () => {
  let wrapper;
  const props = {
    issues: {
      openIssues: {
        issues: [],
        totalCount: 1,
      },
      closedIssues: {
        issues: [],
        totalCount: 1,
      },
    },
    navigation: jest.fn(),
  };
  beforeEach(() => {
    wrapper = render(
      <NavigationContainer>
        <IssuesTabView {...props} />
      </NavigationContainer>
    );
  });

  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should empty open issue', () => {
    const openIssues = wrapper.getByText('No open Issues found.');
    expect(openIssues).toBeDefined();
  });

  it('should show open issues', () => {
    const openIssues = wrapper.getByTestId('open' + '-issues');
    expect(openIssues).toBeDefined();
  });

  it('should have content in open issue', async () => {
    props.issues.openIssues.issues = issuesTestData;
    wrapper = await render(
      <NavigationContainer>
        <IssuesTabView {...props} />
      </NavigationContainer>
    );
    const openIssues = await wrapper.getByTestId('open' + '-issues');
    await expect(openIssues.props.data.length).toBe(1);
  });
  
  it('should show closed issues', () => {
    act(() => {
      usePRAndIssueHeaderStore.setState({activeTab: 'closed'});
    })
    const closedIssues = wrapper.getByTestId('closed' + '-issues');
    expect(closedIssues).toBeDefined();
  });

  it('should have content in closed issue', async () => {
     act(() => {
       usePRAndIssueHeaderStore.setState({ activeTab: 'closed' });
     });
    props.issues.closedIssues.issues = issuesTestData;
    wrapper = await render(
      <NavigationContainer>
        <IssuesTabView {...props} />
      </NavigationContainer>
    );
    const closedIssues = await wrapper.getByTestId('closed' + '-issues');
    await expect(closedIssues.props.data.length).toBe(1);
  });

});