import { useState } from 'react';

import type { PRTabValues } from '../types';
import PullRequestView from './PullRequest.view';
import useIssuesPRs from '../../../hooks/useIssuesPRs';

export default function PullRequestCtrl() {
	const [activeTab, setActiveTab] = useState<PRTabValues>('open');
	const { open, closed, setClosedPRPage, setOpenPRPage } = useIssuesPRs({
		searchType: 'pull-request',
		type: 'pulls',
	});
	const setPRPage = activeTab === 'open' ? setOpenPRPage : setClosedPRPage;

	const PRS = activeTab === 'open' ? open.items : closed.items;

	return (
		<div key={activeTab}>
			<PullRequestView
				pullRequests={PRS}
				openPRCount={open.total_count}
				closedPRCount={closed.total_count}
				activeTab={activeTab}
				changeActiveTab={setActiveTab}
				setPRPage={setPRPage}
			/>
		</div>
	);
}
