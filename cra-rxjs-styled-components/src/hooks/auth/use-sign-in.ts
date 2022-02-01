import { FormEvent, useEffect } from 'react';
import { Subject, switchMap } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { SIGN_IN_URL } from '../../constants/auth.constants';
import { LoginResponse } from '../../interfaces/auth.interfaces';

export function useSignIn(): (event: FormEvent) => void {
  const clickListener$ = new Subject<void>();
  useEffect(() => {
    const subscription = clickListener$
      .asObservable()
      .pipe(
        switchMap(() =>
          fromFetch<LoginResponse>(SIGN_IN_URL, {
            selector: (response: Response) => response.json(),
          })
        )
      )
      .subscribe(({ redirectUrl }: LoginResponse) => {
        window.location.href = redirectUrl;
      });

    return () => {
      subscription.unsubscribe();
    };
  });

  return (event: FormEvent) => {
    event.preventDefault();
    clickListener$.next();
  };
}
