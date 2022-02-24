import { useCallback, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Subject, switchMap } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { SIGN_OUT_URL } from '../../constants/url.constants';
import { AUTH_TOKEN } from '../../constants/auth.constants';

export function useSignOut() {
  const clickListener$ = useMemo(() => new Subject<void>(), [])
  const navigate = useNavigate();

  useEffect(() => {
    const subscription = clickListener$
      .asObservable()
      .pipe(
        switchMap(() =>
          fromFetch(SIGN_OUT_URL, {
            method: 'POST',
            credentials: 'include',
            selector: (response: Response) => response.json(),
          })
        )
      )
      .subscribe(() => {
        sessionStorage.removeItem(AUTH_TOKEN);
        navigate('/signin');
      });

    return () => {
      subscription.unsubscribe();
    };
  }, [clickListener$, navigate]);

  return useCallback(() => {
    clickListener$.next();
  }, [clickListener$]);
}
