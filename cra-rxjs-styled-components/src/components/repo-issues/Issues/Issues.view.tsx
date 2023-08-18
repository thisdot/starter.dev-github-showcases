import IssueCard from '../issue-card/IssueCard';
import { Content, Wrapper } from './Issues.view.styles';
import type { Issue } from './Issue.type';
import IssuePRTabHeader, {
	IssuePRTabValues,
} from '../../../components/pr-issue-tab/IssuePRTabHeader';
import { PaginationContainer } from '../../../components/pull-request/pull-request/PullRequest.style';
import ReactPaginate from 'react-paginate';
import { PULLS_PER_PAGE } from '../../../constants/url.constants';

type IssueProps = {
	issues: Issue[];
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
	return (
		<Wrapper>
			<Content>
				<IssuePRTabHeader
					toggleTab={changeActiveTab}
					closedCount={closedCount}
					openCount={openCount}
					activeTab={activeTab}
					type="issue"
				/>
				{(issues || []).map((issue, index) => (
					<IssueCard issue={issue} key={index} />
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
