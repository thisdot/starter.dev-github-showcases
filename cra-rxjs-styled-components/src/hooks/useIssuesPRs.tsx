import {
	Label,
	MilestoneProps,
} from '../components/repo-issues/Issues/Issue.type';
import { SORT_OPTIONS } from '../constants/data';
import {
	ISSUES_PULLS_URL,
	PULLS_PER_PAGE,
	REPO_LABELS,
	REPO_MILESTONES,
} from '../constants/url.constants';
import { useRepo } from '../context/RepoContext';
import { parseSortParams } from '../helpers/parseSortParams';
import { useEffect, useState } from 'react';
import { forkJoin, tap } from 'rxjs';
import { fromFetchWithAuth } from './auth/from-fetch-with-auth';

export interface IUseIssuesPRs {
	searchType: 'pull-request' | 'issue';
	type: 'pulls' | 'issues';
}

interface IResult {
	total_count: number;
	incomplete_results: boolean;
	items: [];
}

export default function useIssuesPRs({ searchType, type }: IUseIssuesPRs) {
	const [openPRPage, setOpenPRPage] = useState(1);
	const [closedPRPage, setClosedPRPage] = useState(1);
	const [open, setOpen] = useState<IResult>({
		total_count: 0,
		incomplete_results: true,
		items: [],
	});
	const [closed, setClosed] = useState<IResult>({
		total_count: 0,
		incomplete_results: true,
		items: [],
	});

	const {
		owner,
		name: repo,
		label,
		milestone,
		sortBy,
		setLabels,
		setMilestones,
	} = useRepo();

	const request = (url: string) =>
		fromFetchWithAuth(url, {
			selector: (response: Response) => {
				return response.json();
			},
		});

	useEffect(() => {
		const sort = parseSortParams({
			options: SORT_OPTIONS,
			value: sortBy,
			position: 0,
		});
		const direction = parseSortParams({
			options: SORT_OPTIONS,
			value: sortBy,
			position: 1,
		});
		const subscription = forkJoin([
			request(
				`${ISSUES_PULLS_URL({
					user: owner,
					repo,
					type: searchType,
					state: 'open',
					per_page: PULLS_PER_PAGE,
					page: openPRPage,
					labels: label,
					milestone: milestone,
					sort,
					direction,
				})}`
			),
			request(
				`${ISSUES_PULLS_URL({
					user: owner,
					repo,
					type: searchType,
					state: 'closed',
					per_page: PULLS_PER_PAGE,
					page: closedPRPage,
					labels: label,
					milestone: milestone,
					sort,
					direction,
				})}`
			),
			request(`${REPO_LABELS({ user: owner, repo })}`),
			request(`${REPO_MILESTONES({ user: owner, repo })}`),
		])
			.pipe(
				tap((val) => {
					if (val) {
						const labels = val[2] as Label[];
						const milestones = val[3] as MilestoneProps[];
						setLabels?.(labels);
						setMilestones?.(milestones);
						setOpen(val[0]);
						setClosed(val[1]);
					}
				})
			)
			.subscribe();
		return () => {
			subscription.unsubscribe();
		};
	}, [
		owner,
		repo,
		openPRPage,
		closedPRPage,
		sortBy,
		label,
		milestone,
		type,
		searchType,
		setLabels,
		setMilestones,
	]);

	return {
		openPRPage,
		setOpenPRPage,
		closedPRPage,
		setClosedPRPage,
		open,
		closed,
	};
}
