import IssuesView from './Issue.view';
import { useState } from 'react';
import type { Issue } from './Issue.type';
import type { IssueTabValues } from '../types';

export default function IssuesCtrl() {
	const [activeTab, setActiveTab] = useState<IssueTabValues>('open');
	const OPEN_PRS: Issue[] = [
		{
			title: 'Remix/Feature/125 individual repo page',
			openedNum: '#134 opened',
			openedDay: 'yesterday',
			openedBy: 'by vyktoremario',
			status: 'open',
			messageCount: 8,
		},
		{
			title: 'Remix/Feature/125 individual repo page',
			openedNum: '#134 opened',
			openedDay: 'yesterday',
			openedBy: 'by vyktoremario',
			status: 'open',
			messageCount: 8,
		},
		{
			title: 'Remix/Feature/125 individual repo page',
			openedNum: '#134 opened',
			openedDay: 'yesterday',
			openedBy: 'by vyktoremario',
			status: 'open',
			messageCount: 0,
		},
		{
			title: 'Remix/Feature/125 individual repo page',
			openedNum: '#134 opened',
			openedDay: 'yesterday',
			openedBy: 'by vyktoremario',
			status: 'open',
			messageCount: 2,
		},
		{
			title: 'Remix/Feature/125 individual repo page',
			openedNum: '#134 opened',
			openedDay: 'yesterday',
			openedBy: 'by vyktoremario',
			status: 'open',
			messageCount: 3,
		},
	];
	const CLOSED_PRS: Issue[] = [
		{
			title: 'Remix/Feature/125 individual repo page',
			openedNum: '#134 opened',
			openedDay: 'yesterday',
			openedBy: 'by vyktoremario',
			status: 'closed',
			messageCount: 8,
		},
		{
			title: 'Remix/Feature/125 individual repo page',
			openedNum: '#134 opened',
			openedDay: 'yesterday',
			openedBy: 'by vyktoremario',
			status: 'closed',
			messageCount: 8,
		},
		{
			title: 'Remix/Feature/125 individual repo page',
			openedNum: '#134 opened',
			openedDay: 'yesterday',
			openedBy: 'by vyktoremario',
			status: 'closed',
			messageCount: 8,
		},
		{
			title: 'Remix/Feature/125 individual repo page',
			openedNum: '#134 opened',
			openedDay: 'yesterday',
			openedBy: 'by vyktoremario',
			status: 'closed',
			messageCount: 8,
		},
	];

	return (
		<IssuesView
			issues={activeTab === 'open' ? OPEN_PRS : CLOSED_PRS}
			changeActiveTab={setActiveTab}
		/>
	);
}
