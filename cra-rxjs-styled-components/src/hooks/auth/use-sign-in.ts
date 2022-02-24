import { FormEvent, useCallback } from 'react';
import { SIGN_IN_URL } from '../../constants/url.constants';

export function useSignIn(): (event: FormEvent) => void {
  return useCallback((event: FormEvent) => {
    event.preventDefault();
    window.location.href = SIGN_IN_URL;
  },[]);
}
