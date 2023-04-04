import { render } from "@testing-library/react-native"
import OrgList from "./OrgList"
import { userData } from "./data"

describe('Org List', () => {
  let wrapper;
  const orgsLists = userData.organizations.nodes;

  beforeEach(() => {
    wrapper = render(<OrgList organizations={orgsLists} />);
  });

  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });

  it(`should have organizations of length ${orgsLists.length}`, () => {
    const orgs = wrapper.getByTestId('organizations');
    expect(orgs).toBeDefined();
    const orgName = wrapper.getByTestId(orgsLists[0].login);
    expect(orgName).toBeDefined();
  });
});