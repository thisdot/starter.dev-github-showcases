import { render, screen } from '@testing-library/react';
import WelcomeUser from './WelcomeUser';

describe('Home', () => {
  it('renders a heading welcoming the user', () => {
    render(<WelcomeUser name="Test User" />);

    const heading = screen.getByRole('heading', {
      name: /welcome, test user/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
