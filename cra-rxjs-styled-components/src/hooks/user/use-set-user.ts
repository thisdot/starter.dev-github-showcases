import { useEffect, useState } from 'react';
import { tap } from 'rxjs';
import { GITHUB_URL_BASE } from '../../constants/url.constants';
import { fromFetchWithAuth } from '../auth/from-fetch-with-auth';
import { UserContext } from '../../context/UserContext';

export function useSetUser() {
  const [currentUser, setCurrentUser] = useState<string>('');

  const getCurrentUser = () =>
    fromFetchWithAuth<{
      login: string;
    }>(`${GITHUB_URL_BASE}/user`, {
      selector: (response: Response) => {
        return response.json();
      },
    });

  useEffect(() => {
    getCurrentUser().subscribe((user) => {
      console.log(user);
      setCurrentUser(user.login);
    });
  }, [currentUser]);

  return currentUser;
}
