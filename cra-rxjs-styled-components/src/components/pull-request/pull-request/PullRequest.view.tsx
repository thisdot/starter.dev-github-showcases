import { Content, PaginationContainer, Wrapper } from './PullRequest.style';

import type { PRTabValues } from '../types';
import type { PullRequest } from './PullRequest.type';
import PullRequestCard from '../pull-request-card/PullRequestCard';
import PullRequestTabHeader from '../pr-tab-header/PRTabHeader';
import { getPullsState } from '../../../helpers/getPullsState';
import ReactPaginate from 'react-paginate';
import { PULLS_PER_PAGE } from '../../../constants/url.constants';

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

	// Invoke when user click to request another page.
	const handlePageClick = (event: { selected: number }) => {
		const page = event.selected + 1;
		setPRPage(page);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<Wrapper>
			<Content>
				<PullRequestTabHeader
					openPRCount={openPRCount}
					closedPRCount={closedPRCount}
					toggleTab={changeActiveTab}
				/>
				{(pullRequests || []).map((pr, index) => (
					<PullRequestCard
						title={pr.title}
						number={pr.number}
						created_at={pr.created_at}
						openedBy={pr.user.login}
						state={getPullsState(pr)}
						messageCount={pr.comments}
						key={index}
					/>
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
