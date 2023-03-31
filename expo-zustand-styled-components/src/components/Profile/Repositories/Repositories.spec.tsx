import { render } from '@testing-library/react-native';
import Repositories from '.';
import { NavigationContainer } from '@react-navigation/native';
import { userRepos, pageInfo } from './data';


  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          data: {
            owner: {
              repositories: {
                nodes: userRepos,
                pageInfo,
              },
            },
          },
        }),
    })
  );

describe('Repoositories', () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = await render(
      <NavigationContainer>
        <Repositories username={'hdjerry'} />
      </NavigationContainer>
    );
  });

  it('should mount', async () => {
    await expect(wrapper).toBeTruthy();
  });

  it(`should display ${userRepos.length} item`, async () => {
    const flatList = await wrapper.getByTestId(`flatList`);
    expect(flatList.children.length).toBe(userRepos.length);
  });
});
