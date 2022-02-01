import React from 'react';
import { useSignIn } from '../hooks/auth/use-sign-in';
import './sign-in.css';

function SignIn() {
  const handleOnSubmit = useSignIn();

  return (
    <main className="page">
      <div className="sign-in">
        <div className="provider">
          <form method="POST" className="form" onSubmit={handleOnSubmit}>
            <input type="hidden" className="input" name="csrfToken" />
            <input type="hidden" className="input" name="callbackUrl" />
            <button type="submit" className="button">
              Sign in with GitHub
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default SignIn;
