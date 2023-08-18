import IssueCard from '../issue-card/IssueCard';
import { Container, Content, Wrapper } from './Issues.view.styles';
import type { Issue } from './Issue.type';
import { IssueTabValues } from '../../../types/types';
import Pagination from '../../pagination/Pagination';
import IssuePRTabHeader from '../../../components/pr-issue-tab/IssuePRTabHeader';
import { useRepo } from '../../../context/RepoContext';
import ClearFilterAndSortButtonText from '../../../components/clear-filter-and-sort-button/ClearFilterAndSortButtonText';
import EmptyResult from '../../../components/empty-result/EmptyResult';

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
	const { resetFilterValues, isFilteredOrSorted } = useRepo();

	return (
		<Wrapper>
			<Content>
				{isFilteredOrSorted && (
					<Container>
						<ClearFilterAndSortButtonText
							variant="repo"
							resetFilter={resetFilterValues}
							text={'Clear Filter & Sort'}
						/>
					</Container>
				)}
				<IssuePRTabHeader
					toggleTab={changeActiveTab}
					closedCount={closedCount}
					openCount={openCount}
					type="issue"
				/>
				{(!issues || issues.length === 0) && (
					<EmptyResult
						icon="issue"
						text={
							isFilteredOrSorted
								? 'No results matched your search.'
								: 'No issues found'
						}
					/>
				)}
				{issues.map((issue, index) => (
					<IssueCard issue={issue} key={index} />
				))}
			</Content>
			<Pagination />
		</Wrapper>
	);
}
