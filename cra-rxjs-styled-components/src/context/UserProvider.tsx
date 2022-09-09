import type { ReactNode } from 'react';
import { createContext, useContext, useState, useEffect } from 'react';
import { fromFetchWithAuth } from '../hooks/auth/from-fetch-with-auth';
import { GITHUB_URL_BASE } from '../constants/url.constants';
import { tap, forkJoin } from 'rxjs';

export interface IUserContext {
	avatar_url: string;
	bio: string;
	blog: string;
	company: string;
	created_at: boolean;
	email: string;
	events_url: string;
	followers: number;
	followers_url: string;
	following: number;
	following_url: string;
	gists_url: string;
	gravatar_id: string;
	hireable: boolean;
	html_url: string;
	id: number;
	location: string;
	login: string;
	name: string;
	node_id: string;
	organizations_url: string;
	public_gists: number;
	public_repos: number;
	received_events_url: string;
	repos_url: string;
	site_admin: boolean;
	starred_url: string;
	subscriptions_url: string;
	type: string;
	twitter_username: string;
	updated_at: string;
	url: string;
	website_url?: string;
	starredRepos: number;
	organizations: IOrganization[];
}

export interface IOrganization {
	login: string;
	avatar_url: string;
}

interface UserProviderProps {
	children: ReactNode;
}

export const UserContext = createContext<IUserContext | undefined>(undefined);

export function UserProvider({ children }: UserProviderProps) {
	const [user, setUser] = useState<IUserContext>();

	const request = (url: string) =>
		fromFetchWithAuth(url, {
			selector: (response: Response) => {
				return response.json();
			},
		});

	useEffect(() => {
		const subscription = forkJoin([
			request(`${GITHUB_URL_BASE}/user`),
			request(`${GITHUB_URL_BASE}/user/orgs`),
			request(`${GITHUB_URL_BASE}/user/starred`),
		])
			.pipe(
				tap((val) => {
					if (val) {
					}
					setUser({
						...val[0],
						organizations: val[1],
						starredRepos: val[2].length,
					});
				})
			)
			.subscribe();

		return () => {
			subscription.unsubscribe();
		};
	}, []);

	return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export function useUser() {
	const context = useContext(UserContext);
	return context;
}
