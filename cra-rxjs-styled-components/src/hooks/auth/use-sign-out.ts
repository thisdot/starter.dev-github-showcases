import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Subject, switchMap } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { SIGN_OUT_URL } from '../../constants/url.constants';
import { LoginResponse } from '../../interfaces/auth.interfaces';
import { AUTH_TOKEN } from '../../constants/auth.constants';

export function useSignOut() {
  const clickListener$ = new Subject<void>();
  const navigate = useNavigate();

  useEffect(() => {
    const subscription = clickListener$
      .asObservable()
      .pipe(
        switchMap(() =>
          fromFetch<LoginResponse>(SIGN_OUT_URL, {
            selector: (response: Response) => response.json(),
          })
        )
      )
      .subscribe(({ redirectUrl }: LoginResponse) => {
        localStorage.removeItem(AUTH_TOKEN);
        navigate('/signin');
      });

    return () => {
      subscription.unsubscribe();
    };
  });

  return () => {
    clickListener$.next();
  };
}
