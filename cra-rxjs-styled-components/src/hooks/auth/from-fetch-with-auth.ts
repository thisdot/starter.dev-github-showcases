import { Observable } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { AUTH_TOKEN } from '../../constants/auth.constants';

type RequestInitWithSelector<T> = RequestInit & {
	selector: (response: Response) => Observable<T> | Promise<T>;
};

type RequestInitWithOptionalSelector<T> = RequestInit & {
	selector?: (response: Response) => Observable<T> | Promise<T>;
};

export function fromFetchWithAuth<T>(
	input: string | Request,
	init: RequestInitWithSelector<T>
): Observable<T>;
export function fromFetchWithAuth(
	input: string | Request,
	init?: RequestInit
): Observable<Response>;
export function fromFetchWithAuth<T>(
	input: string | Request,
	init?: RequestInitWithOptionalSelector<T>
): Observable<Response | T> {
	const authHeader = {
		Authorization: `Bearer ${sessionStorage.getItem(AUTH_TOKEN)}`,
	};
	if (init) {
		init.headers = {
			...authHeader,
			...init.headers,
		};
	} else {
		init = {
			headers: authHeader,
		};
	}

	return fromFetch(input, init);
}
