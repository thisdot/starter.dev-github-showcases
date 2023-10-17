import {
	Observable,
	Subscription,
	filter,
	map,
	switchMap,
	tap,
	zip,
} from 'rxjs';
import {
	Pagination,
	Repository,
	RepositoryWithBranchCount,
	UseRepo,
} from '../../interfaces/repositories.interfaces';
import {
	extractBranchCount,
	sanitizeBranchesUrl,
} from '../../helpers/extract-branch-count';
import { useEffect, useState } from 'react';

import {
	USER_REPO_LIST,
	USER_TOP_REPO_LIST,
} from '../../constants/url.constants';
import { fromFetchWithAuth } from '../auth/from-fetch-with-auth';
import parse from 'parse-link-header';

export function useRepos(
	username: string | undefined,
	isTopRepos?: boolean
): UseRepo {
	const [state, setState] = useState<RepositoryWithBranchCount[]>([]);
	const [languages, setLanguages] = useState<string[]>([]);
	const [paginationPages, setPaginationPages] = useState<Pagination>({
		prevPage: '',
		nextPage: '1',
		hasPrevPage: false,
		hasNextPage: false,
	});
	const [page, setPage] = useState<string | undefined>('1');

	useEffect(() => {
		if (username) {
			const subscription: Subscription = fromFetchWithAuth<Repository[]>(
				isTopRepos ? USER_TOP_REPO_LIST(page) : USER_REPO_LIST(username, page),
				{
					selector: (response: Response) => {
						const links = parse(response.headers.get('Link'));
						const hasPrevPage = links?.prev;
						const hasNextPage = links?.next;

						setPaginationPages({
							prevPage: links?.prev?.page,
							nextPage: links?.next?.page,
							hasPrevPage: hasPrevPage !== undefined,
							hasNextPage: hasNextPage !== undefined,
						});

						return response.json();
					},
				}
			)
				.pipe(
					filter((repos) => !!repos.length),
					switchMap((repositories: Repository[]) => {
						const requests = repositories.map(createBranchCountRequest);
						const reposLaguages = repositories
							.map((res) => res.language)
							.filter((res) => res)
							.sort((a, b) => a.localeCompare(b));
						setLanguages([...new Set(reposLaguages)]);
						return zip(...requests).pipe(
							map(mergeRepositoriesWithBranchCount(repositories))
						);
					}),
					tap(setState)
				)
				.subscribe();

			return () => {
				subscription.unsubscribe();
			};
		}
	}, [username, page, isTopRepos]);

	const nextPage = () => {
		setPage(paginationPages.nextPage);
	};

	const prevPage = () => {
		setPage(paginationPages.prevPage);
	};

	return {
		repositories: state,
		languages,
		prevPage,
		nextPage,
		hasNextPage: paginationPages.hasNextPage,
		hasPrevPage: paginationPages.hasPrevPage,
	};
}

function createBranchCountRequest(repo: Repository): Observable<number> {
	return fromFetchWithAuth<number>(sanitizeBranchesUrl(repo.branches_url), {
		method: 'HEAD',
		selector: extractBranchCount,
	});
}

function mergeRepositoriesWithBranchCount(repositories: Repository[]) {
	return (counts: number[]): RepositoryWithBranchCount[] =>
		repositories.map((r: Repository, index: number) => ({
			...r,
			branches_count: counts[index],
		}));
}
