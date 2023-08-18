import { Container, Content, Wrapper } from './Issues.view.styles';
import type { Issue } from './Issue.type';
import IssuePRTabHeader, {
	IssuePRTabValues,
} from '../../../components/pr-issue-tab/IssuePRTabHeader';
import { PaginationContainer } from '../../../components/pull-request/pull-request/PullRequest.style';
import ReactPaginate from 'react-paginate';
import { PULLS_PER_PAGE } from '../../../constants/url.constants';
import { useRepo } from '../../../context/RepoContext';
import ClearFilterAndSortButtonText from '../../../components/clear-filter-and-sort-button/ClearFilterAndSortButtonText';
import IssuePRCard from '../../../components/issue-pr-card/IssuePRCard';
import EmptyResult from '../../../components/empty-result/EmptyResult';
import { IssuePRData } from '@/types/types';

type IssueProps = {
	issues: IssuePRData[];
	changeActiveTab: (value: IssuePRTabValues) => void;
	closedCount: number;
	openCount: number;
	activeTab: IssuePRTabValues;
	setPRPage: (value: number) => void;
};

export default function IssueView({
	issues,
	closedCount,
	openCount,
	activeTab,
	changeActiveTab,
	setPRPage,
}: IssueProps) {
	const totalPRsCount = activeTab === 'open' ? openCount : closedCount;
	const pageCount = Math.ceil(totalPRsCount / PULLS_PER_PAGE);

	// Invoke when user click to request another page.
	const handlePageClick = (event: { selected: number }) => {
		const page = event.selected + 1;
		setPRPage(page);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
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
					activeTab={activeTab}
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
					<IssuePRCard type="issue" data={issue} key={index} />
				))}
			</Content>
			<PaginationContainer>
				<ReactPaginate
					breakLabel="..."
					nextLabel="Next >"
					marginPagesDisplayed={1}
					onPageChange={handlePageClick}
					pageRangeDisplayed={7}
					pageCount={pageCount}
					previousLabel="< Previous"
					renderOnZeroPageCount={() => null}
					containerClassName={'pagination'}
					pageClassName={'pagination__item'}
					previousClassName={'pagination__link_end'}
					nextClassName={'pagination__link_end'}
					disabledClassName={'pagination__link--disabled'}
					activeClassName={'pagination__link--active'}
				/>
			</PaginationContainer>
		</Wrapper>
	);
}
