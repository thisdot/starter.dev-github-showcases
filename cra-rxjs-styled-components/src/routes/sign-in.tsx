import styled from 'styled-components';
import { useSignIn } from '../hooks/auth/use-sign-in';

const Page = styled.main`
  background: black;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    'left top right'
    'left login right'
    'left bottom right';
`;

const FormContainer = styled.div`
  grid-area: login;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubmitButton = styled.button`
  padding: 1rem 0.75rem;
  border: 1px solid rgb(107 114 128);
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
`;

function SignIn() {
  const handleOnSubmit = useSignIn();

  return (
    <Page>
      <FormContainer>
        <form method="POST" onSubmit={handleOnSubmit}>
          <input type="hidden" name="csrfToken" />
          <input type="hidden" name="callbackUrl" />
          <SubmitButton type="submit" className="button">
            Sign in with GitHub
          </SubmitButton>
        </form>
      </FormContainer>
    </Page>
  );
}

export default SignIn;
