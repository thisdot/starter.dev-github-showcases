import {
	Observable,
	Subscription,
	filter,
	map,
	switchMap,
	tap,
	zip,
} from 'rxjs';
import React, { useEffect, useState } from 'react';

import type { PRTabValues } from '../types';
import {
	OPEN_PULLS_URL,
	CLOSED_PULLS_URL,
} from '../../../constants/url.constants';
import type { PullRequest, PullRequests } from './PullRequest.type';
import PullRequestView from './PullRequest.view';
import { fromFetchWithAuth } from '../../../hooks/auth/from-fetch-with-auth';
import { useParams } from 'react-router-dom';

export default function PullRequestCtrl() {
	const [activeTab, setActiveTab] = useState<PRTabValues>('open');
	const [openPRPage, setOpenPRPage] = useState(1);
	const [closedPRPage, setClosedPRPage] = useState(1);
	const setPRPage = activeTab === 'open' ? setOpenPRPage : setClosedPRPage;
	const [openPullRequests, setOpenPullRequests] = useState<PullRequests>({
		total_count: 0,
		items: [],
	});
	const [closedPullRequests, setClosedPullRequests] = useState<PullRequests>({
		total_count: 0,
		items: [],
	});

	const { username, repo } = useParams();

	useEffect(() => {
		if (username && repo) {
			const openPRSubscription: Subscription = fromFetchWithAuth<PullRequests>(
				OPEN_PULLS_URL(username, repo, openPRPage),
				{
					selector: async (response: Response) => {
						const res = await response.json();
						return res as any;
					},
				}
			)
				.pipe(
					filter((pulls) => !!pulls.total_count),
					switchMap((pulls: PullRequests) => {
						const requests = pulls.items.map(createCommentCountRequest);
						return zip(...requests).pipe(
							map(mergePullRequestsWithCommentCount(pulls))
						);
					}),
					tap(setOpenPullRequests)
				)
				.subscribe();

			const closedPRSubscription: Subscription = fromFetchWithAuth<PullRequests>(
				CLOSED_PULLS_URL(username, repo, closedPRPage),
				{
					selector: async (response: Response) => {
						const res = await response.json();
						return res as any;
					},
				}
			)
				.pipe(
					filter((pulls) => !!pulls.total_count),
					switchMap((pulls: PullRequests) => {
						const requests = pulls.items.map(createCommentCountRequest);
						return zip(...requests).pipe(
							map(mergePullRequestsWithCommentCount(pulls))
						);
					}),
					tap(setClosedPullRequests)
				)
				.subscribe();

			return () => {
				openPRSubscription.unsubscribe();
				closedPRSubscription.unsubscribe();
			};
		}
	}, [username, repo, openPRPage, closedPRPage]);

	const PRS =
		activeTab === 'open' ? openPullRequests.items : closedPullRequests.items;

	return (
		<PullRequestView
			pullRequests={PRS}
			openPRCount={openPullRequests.total_count}
			closedPRCount={closedPullRequests.total_count}
			activeTab={activeTab}
			changeActiveTab={setActiveTab}
			setPRPage={setPRPage}
		/>
	);
}

function createCommentCountRequest(pr: PullRequest): Observable<number> {
	const review_comments_url = `${pr.repository_url}/pulls/${pr.number}/comments`;
	return fromFetchWithAuth<number>(review_comments_url, {
		selector: (response: Response) => {
			return response.json();
		},
	});
}

function mergePullRequestsWithCommentCount(pulls: PullRequests) {
	return (counts: number[]): PullRequests => {
		const items = pulls.items.map((p: PullRequest, index: number) => ({
			...p,
			comments: counts[index],
		}));
		return {
			total_count: pulls.total_count,
			items,
		};
	};
}
