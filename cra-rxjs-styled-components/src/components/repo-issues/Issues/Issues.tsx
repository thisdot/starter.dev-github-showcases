import { useState } from 'react';
import IssueView from './Issues.view';
import useIssuesPRs from '../../../hooks/useIssuesPRs';
import { IssuePRTabValues } from '../../../components/pr-issue-tab/IssuePRTabHeader';

export default function IssueCtrl() {
	const { open, closed, setClosedPRPage, setOpenPRPage } = useIssuesPRs({
		searchType: 'issue',
		type: 'issues',
	});
	const [activeTab, setActiveTab] = useState<IssuePRTabValues>('open');
	const setPRPage = activeTab === 'open' ? setOpenPRPage : setClosedPRPage;

	const issues = activeTab === 'open' ? open.items : closed.items;
	return (
		<div key={activeTab}>
			<IssueView
				issues={issues}
				closedCount={closed.total_count}
				openCount={open.total_count}
				activeTab={activeTab}
				changeActiveTab={setActiveTab}
				setPRPage={setPRPage}
			/>
		</div>
	);
}
