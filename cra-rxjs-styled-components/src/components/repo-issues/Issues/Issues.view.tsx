import IssueTabHeader from '../issue-tab-header';
import IssueCard from '../issue-card';
import Pagination from '../../pagination';
import { Content, Wrapper } from './Issues.view.styles';

import type { Issue } from './Issue.type';
import { IssueTabValues } from '../../../types/types';

type IssueProps = {
	issues: Issue[];
	changeActiveTab: (value: IssueTabValues) => void;
	closedCount: number;
	openCount: number;
};

export default function IssueView({
	issues,
	closedCount,
	openCount,
	changeActiveTab,
}: IssueProps) {
	return (
		<Wrapper>
			<Content>
				<IssueTabHeader
					toggleTab={changeActiveTab}
					closedCount={closedCount}
					openCount={openCount}
				/>
				{issues.map((issue, index) => (
					<IssueCard issue={issue} key={index} />
				))}
			</Content>
			<Pagination />
		</Wrapper>
	);
}
