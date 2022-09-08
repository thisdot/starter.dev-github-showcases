import type { RepoContextInterface } from '../../context/RepoContext';
import type { ReactNode } from 'react';
import { RepoProvider } from '../../context/RepoContext';
import { useEffect, useState } from 'react';
import { tap, forkJoin } from 'rxjs';
import {
	SINGLE_USER_REPO,
	ISSUE_PR_SEARCH,
} from '../../constants/url.constants';
import { Repository } from '../../interfaces/repositories.interfaces';
import { fromFetchWithAuth } from '../../hooks/auth/from-fetch-with-auth';

type IssueDetails = {
	total_count: number;
	incomplete_results: boolean;
	items: any[];
};

type RepositoryDetails = {
	repository: Repository | null;
	prs?: IssueDetails;
	rootFileInfo?: any[];
	issues?: IssueDetails;
	topics?: { names: string[] };
};

interface RepoPageProps {
	name?: string | null;
	owner?: string | null;
	branch?: string | null;
	path?: string;
	children: ReactNode;
}

/**
 * Parses repo query params, fetches general repo data, and wraps children in a context provider containing repo data
 */
function RepoPage({ name, owner, branch, path = '', children }: RepoPageProps) {
	const isOwnerAndNameValid =
		typeof owner === 'string' && typeof name === 'string';

	const [isLoading, setLoading] = useState(true);
	const formattedPath = Array.isArray(path) ? path.join('/') : path;
	const defaultBranch = typeof branch === 'string' ? branch : 'HEAD';

	const [repoDetails, setRepoDetails] = useState<RepositoryDetails>({
		repository: null,
	});

	const { repository, prs, issues, topics } = repoDetails;

	const request = (url: string) =>
		fromFetchWithAuth(url, {
			selector: (response: Response) => {
				return response.json();
			},
		});

	useEffect(() => {
		if (!isOwnerAndNameValid) {
			return;
		}

		const subscription = forkJoin([
			request(SINGLE_USER_REPO(owner, name)),
			request(`${ISSUE_PR_SEARCH(owner, name, 'pr', 'open', 1, 0)}`),
			request(`${ISSUE_PR_SEARCH(owner, name, 'issue', 'open', 1, 0)}`),
			request(`${SINGLE_USER_REPO(owner, name)}/topics`),
		])
			.pipe(
				tap((val) => {
					if (val) {
						setRepoDetails({
							repository: val[0],
							prs: val[1],
							issues: val[2],
							topics: val[3],
						});
						setLoading(false);
					}
				})
			)
			.subscribe();
		return () => {
			subscription.unsubscribe();
		};
	}, [owner, name, isOwnerAndNameValid]);

	// we're not server rendering, need to wait for client to hydrate
	if (!isOwnerAndNameValid) {
		return null;
	}
	const context: RepoContextInterface = {
		owner,
		name,
		branch: repository?.default_branch ?? defaultBranch,
		basePath: `/${owner}/${name}`,
		path: formattedPath,
		isRepoLoading: isLoading,
		data: repository
			? {
					// @ts-ignore - generated types be like that
					isOrg: repository.owner.type === 'Organization',
					isPrivate: repository.private,
					stargazerCount: repository.stargazers_count,
					forkCount: repository.forks_count,
					watcherCount: repository.subscribers_count,
					openIssueCount: issues?.total_count ?? 0,
					openPullRequestCount: prs?.total_count ?? 0,
					description: repository.description,
					homepageUrl: repository.homepage,
					topics: topics?.names ?? [],
			  }
			: undefined,
	};

	return <RepoProvider value={context}>{children}</RepoProvider>;
}

export default RepoPage;
