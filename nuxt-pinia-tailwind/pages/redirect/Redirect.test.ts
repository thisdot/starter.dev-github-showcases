import { render } from '@testing-library/vue';
import Redirect from './index.vue';
import { LoginStrategies } from '@/types/auth/enums';

describe('<Redirect />', () => {
  it('Should obtain the token', () => {
    // Arrange
    const loginWith = jest.fn();

    render(Redirect, {
      mocks: {
        $nuxt: {
          context: {
            $auth: {
              loginWith,
            },
          },
        },
      },
    });

    expect(loginWith).toBeCalledWith(LoginStrategies.CustomLogin);
  });

  it('Should redirect to the sign-in page if an error occurs', () => {
    // Arrange
    const redirect = jest.fn();

    render(Redirect, {
      mocks: {
        $nuxt: {
          context: {
            redirect,
          },
        },
      },
    });

    expect(redirect).toBeCalledWith('/sign-in');
  });
});
