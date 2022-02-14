import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSignOut } from '../../hooks/auth/use-sign-out';
import { GithubLogo } from '../misc/github-logo';

const Nav = styled.nav`
  width: 100%;
  height: 70px;
  background-color: #111827;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  box-sizing: border-box;
  grid-area: header;
  border: 1px solid rgba(17, 24, 39, 1);
`;

export default function Header() {
  const clickHandler = useSignOut();

  return (
    <Nav>
      <Link to="https://github.com">
        <GithubLogo></GithubLogo>
      </Link>
      <button onClick={clickHandler}>log out</button>
    </Nav>
  );
}
