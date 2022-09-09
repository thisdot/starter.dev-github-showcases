import { useEffect, useState } from 'react';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { SINGLE_USER_REPO } from '../../constants/url.constants';
import { fromFetchWithAuth } from '../auth/from-fetch-with-auth';
import { useRepo } from '../../context/RepoContext';
import { Buffer } from 'buffer';

type FileData = {
	content: string;
	download_url: string;
	encoding: string;
	git_url: string;
	html_url: string;
	name: string;
	path: string;
	sha: string;
	size: number;
	type: string;
	url: string;
};

export function useRepoBlob() {
	const { owner, name, branch, path } = useRepo();

	const [file, setFile] = useState<FileData>();
	const [code, setCode] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<string>();

	const relativePath = path ? `/${path}` : '';
	const branchRef = branch ? `?ref=${branch}` : '';
	const repoUrl: string = `${SINGLE_USER_REPO(
		owner,
		name
	)}/contents${relativePath}${branchRef}`;

	const request = (url: string) =>
		fromFetchWithAuth(url, {
			selector: (response: Response) => {
				return response.json();
			},
		});

	useEffect(() => {
		setIsLoading(true);
		const subscription = request(repoUrl)
			.pipe(
				tap((data) => {
					if (data) {
						setFile(data);
						const encoded = data.content;
						const decoded = Buffer.from(encoded, 'base64').toString('utf8');
						setCode(decoded);
						setIsLoading(false);
					}
				}),
				catchError((error): Observable<any> => {
					// we expect 404, it's not a failure for us.
					if (error.status === 404) {
						return of(null); // or any other stream like of('') etc.
					}

					// other errors we don't know how to handle and throw them further.
					setError(error);
					return throwError(() => new Error(error));
				})
			)
			.subscribe();
		return () => {
			subscription.unsubscribe();
		};
	}, [repoUrl]);

	return {
		file,
		code,
		isLoading,
		error,
	};
}
