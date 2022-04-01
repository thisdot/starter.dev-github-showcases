import { useSetToken } from '../hooks/auth/use-set-token';

export default function Redirect() {
  useSetToken();

  return <h2>Redirecting...</h2>;
}
