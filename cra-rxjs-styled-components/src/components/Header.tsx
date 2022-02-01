import { useSignOut } from '../hooks/auth/use-sign-out';

export default function Header() {
  const clickHandler = useSignOut();

  return (
    <nav className="header">
      <button onClick={clickHandler}>log out</button>
    </nav>
  );
}
