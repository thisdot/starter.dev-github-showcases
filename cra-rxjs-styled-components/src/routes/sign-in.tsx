import styled from 'styled-components';
import { useSignIn } from '../hooks/auth/use-sign-in';

const Main = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;
  display: table;
  margin: 0;
  padding: 0;
`;

const Page = styled.div `
  background: black;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  padding: 0.5rem;
`;

const FormContainer = styled.div`
  max-width: 300px;
  display: block;
  margin: 0 auto 0.5rem;
`;

const SubmitButton = styled.button`
  background: transparent;
  padding: 0.75rem 1rem;
  width: 100%;
  color: #ccc;
  border: 1px solid #555;
  border-radius: 0.3rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
`;

function SignIn() {
  const handleOnSubmit = useSignIn();

  return (
    <Main>
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
    </Main>
  );
}

export default SignIn;
