import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import Auth from './Auth.svelte';

describe('Auth Component', () => {
  it('should render sign out', async () => {
    render(Auth);

    const signInBtn = screen.getByRole('button');
    expect(signInBtn.textContent).toEqual('Sign in with GitHub');
    await userEvent.click(signInBtn);

    expect(document.location.href).toEqual('http://localhost:3000/');
  });
});
