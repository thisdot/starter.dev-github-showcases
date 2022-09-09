import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { catchError, EMPTY, tap } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { AUTH_TOKEN } from '../../constants/auth.constants';
import { GET_TOKEN_URL } from '../../constants/url.constants';
import { AuthSuccessResponse } from '../../interfaces/auth.interfaces';

export function useSetToken() {
	const navigate = useNavigate();

	useEffect(() => {
		const subscription = fromFetch<AuthSuccessResponse>(GET_TOKEN_URL, {
			method: 'GET',
			headers: new Headers({
				'Content-Type': 'application/json; charset=UTF-8',
			}),
			credentials: 'include',
			selector: (response: Response) => response.json(),
		})
			.pipe(
				tap(({ access_token }) => {
					if (!access_token) {
						throw new Error(`Error: could not retrieve token`);
					}
				}),
				catchError(() => {
					navigate('/signin', { replace: true });
					return EMPTY;
				})
			)
			.subscribe(({ access_token }) => {
				sessionStorage.setItem(AUTH_TOKEN, access_token);
				navigate('/', { replace: true });
			});
		return () => {
			subscription.unsubscribe();
		};
	}, [navigate]);
}
