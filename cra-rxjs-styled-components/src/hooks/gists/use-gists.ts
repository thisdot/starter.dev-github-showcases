import { useEffect, useState } from 'react';
import { GISTS_URL } from '../../constants/url.constants';
import { Gist, GistWithFilename } from '../../interfaces/gists.interfaces';
import { fromFetchWithAuth } from '../auth/from-fetch-with-auth';
import { filter, map, Subscription, tap } from 'rxjs';
import { useUser } from '../../context/UserProvider';

export function useGists(): {
	gists: GistWithFilename[];
	loadingGist: boolean;
} {
	const [state, setState] = useState<GistWithFilename[]>([]);
	const [loadingGist, setLoadingGist] = useState<boolean>(true);
	const context = useUser();
	const user = context?.user;

	/**
	 * @todo Refactor getting the currently authenticated user's username into
	 *       a global context.
	 */

	useEffect(() => {
		const subscription: Subscription = fromFetchWithAuth<Gist[]>(
			GISTS_URL(user?.login as string),
			{
				selector: (response: Response) => {
					return response.json();
				},
			}
		)
			.pipe(
				filter((gists) => !!gists.length),
				map((gists) => {
					return gists.map((gist) => {
						const { url, id, html_url, files } = gist;

						let filename = Object.keys(files)[0];
						filename = files[filename].filename;

						return {
							url,
							id,
							html_url,
							files,
							filename,
						};
					});
				}),
				tap((val) => {
					setLoadingGist(false);
					setState(val);
				})
			)
			.subscribe();

		return () => {
			subscription.unsubscribe();
		};
	}, [user]);

	return { gists: state, loadingGist };
}
