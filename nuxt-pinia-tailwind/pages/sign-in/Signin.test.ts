import { fireEvent, render, screen } from '@testing-library/vue';
import SignIn from './index.vue';
import { SIGN_IN_URL } from '@/constants/url.constants';

describe('<SignIn />', () => {
  it('Should redirect the user when clicking at the signin button', async () => {
    // Arrange
    const STARTER_API_URL =
      process.env.STARTER_API_URL || 'https://api.starter.dev/api';
    const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

    // Redefine window.location in order to mock it
    const windowLocation = JSON.stringify(window.location);

    global.window = Object.create(window);
    Object.defineProperty(window, 'location', {
      writable: true,
      value: JSON.parse(windowLocation),
    });

    render(SignIn, {
      mocks: {
        $nuxt: {
          context: {
            $config: { STARTER_API_URL, BASE_URL },
          },
        },
      },
    });

    const signInButton = screen.getByTestId('sign-in-button');

    // Act
    await fireEvent.click(signInButton);

    // Assertion
    expect(window.location.href).toEqual(
      SIGN_IN_URL(STARTER_API_URL, BASE_URL)
    );
  });
});
