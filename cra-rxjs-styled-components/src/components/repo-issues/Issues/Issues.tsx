import { useState } from 'react';
import IssueView from './Issues.view';
import type { IssueTabValues, IssueTypes } from '../../../types/types';
type IssuesProps = {
	issues: IssueTypes;
};

export default function IssueCtrl({ issues }: IssuesProps) {
	const [activeTab, setActiveTab] = useState<IssueTabValues>('open');
	return (
		<IssueView
			issues={issues[activeTab].items}
			closedCount={issues?.closed.total_count!}
			openCount={issues?.open.total_count!}
			changeActiveTab={setActiveTab}
		/>
	);
}
