import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { tap } from 'rxjs';
import { ORG_REPO_LIST, USER_REPO_LIST } from '../../constants/url.constants';
import { fromFetchWithAuth } from '../auth/from-fetch-with-auth';
import { Repository } from '../../interfaces/repositories.interfaces';

export function useUserRepositories(isOrg = false) {
	const [repos, setRepos] = useState<Repository[]>();
	const [loading, setLoading] = useState(true);
	const { username } = useParams();

	const request = (url: string) =>
		fromFetchWithAuth(url, {
			selector: (response: Response) => {
				return response.json();
			},
		});

	useEffect(() => {
		if (!username) {
			return;
		}
		const GITHUB_URL = isOrg ? ORG_REPO_LIST(username) : USER_REPO_LIST(username);
		const subscription = request(GITHUB_URL)
			.pipe(
				tap((data) => {
					if (data) {
						setRepos(data);
						setLoading(false);
					}
				})
			)
			.subscribe();
		return () => {
			subscription.unsubscribe();
		};
	}, [isOrg, username]);

	return {
		loading,
		repos,
	};
}
