import {
	Container,
	Content,
	PaginationContainer,
	Wrapper,
} from './PullRequest.style';
import type { PRTabValues } from '../types';
import type { PullRequest } from './PullRequest.type';
import { getPullsState } from '../../../helpers/getPullsState';
import ReactPaginate from 'react-paginate';
import { PULLS_PER_PAGE } from '../../../constants/url.constants';
import IssuePRTabHeader from '../../../components/pr-issue-tab/IssuePRTabHeader';
import { useRepo } from '../../../context/RepoContext';
import ClearFilterAndSortButtonText from '../../../components/clear-filter-and-sort-button/ClearFilterAndSortButtonText';
import IssuePRCard from '../../../components/issue-pr-card/IssuePRCard';
import EmptyResult from '../../../components/empty-result/EmptyResult';

type PullRequestProps = {
	pullRequests: PullRequest[];
	activeTab: PRTabValues;
	changeActiveTab: (value: PRTabValues) => void;
	openPRCount: number;
	closedPRCount: number;
	setPRPage: (value: number) => void;
};

export default function PullRequestView({
	pullRequests,
	activeTab,
	changeActiveTab,
	openPRCount,
	closedPRCount,
	setPRPage,
}: PullRequestProps) {
	const totalPRsCount = activeTab === 'open' ? openPRCount : closedPRCount;
	const pageCount = Math.ceil(totalPRsCount / PULLS_PER_PAGE);
	const { resetFilterValues, isFilteredOrSorted } = useRepo();
	// Invoke when user click to request another page.
	const handlePageClick = (event: { selected: number }) => {
		const page = event.selected + 1;
		setPRPage(page);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

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
					closedCount={closedPRCount}
					openCount={openPRCount}
					toggleTab={changeActiveTab}
					type="pr"
					activeTab={activeTab}
				/>
				{(!pullRequests || pullRequests.length === 0) && (
					<EmptyResult
						icon="pr"
						text={
							isFilteredOrSorted
								? 'No results matched your search.'
								: 'No pull requests found'
						}
					/>
				)}
				{pullRequests.map((pr, index) => (
					<IssuePRCard
						key={pr.number}
						type="pr"
						data={{
							title: pr.title,
							number: pr.number,
							created_at: pr.created_at,
							openedBy: pr.user.login,
							user: pr.user,
							state: getPullsState(pr),
							comments: pr.comments,
							labels: pr.labels,
						}}
					/>
				))}
			</Content>

			<PaginationContainer>
				{pageCount > 1 && (
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
				)}
			</PaginationContainer>
		</Wrapper>
	);
}
