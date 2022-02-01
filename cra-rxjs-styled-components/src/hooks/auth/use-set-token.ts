import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { catchError, EMPTY, tap } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { AuthSuccessResponse } from '../../interfaces/auth.interfaces';
import { AUTH_TOKEN, GET_TOKEN_URL } from '../../constants/auth.constants';

export function useSetToken() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const code = params.get('code');
    const subscription = fromFetch<AuthSuccessResponse>(GET_TOKEN_URL, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
      }),
      body: JSON.stringify({
        code,
      }),
      selector: (response: Response) => response.json(),
    })
      .pipe(
        tap(({ access_token }) => {
          if (!access_token) {
            throw new Error(`Error: could not retrieve token`);
          }
        }),
        catchError((e) => {
          navigate('/signin', { replace: true });
          return EMPTY;
        })
      )
      .subscribe(({ access_token }) => {
        localStorage.setItem(AUTH_TOKEN, access_token);
        navigate('/', { replace: true });
      });
    return () => {
      subscription.unsubscribe();
    };
  });
}
