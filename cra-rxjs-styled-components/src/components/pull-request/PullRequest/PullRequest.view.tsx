import { Content, PaginationContainer, Wrapper } from './PullRequest.style';

import type { PRTabValues } from '../types';
import type { PullRequest } from './PullRequest.type';
import PullRequestCard from '../PullRequestCard';
import PullRequestTabHeader from '../PRTabHeader';
import { getPullsState } from '../../../helpers/getPullsState';

type PullRequestProps = {
  pullRequests?: PullRequest[];
  changeActiveTab: (value: PRTabValues) => void;
  openPRCount?: number;
  closedPRCount?: number;
};

export default function PullRequestView({
  pullRequests,
  changeActiveTab,
  openPRCount,
  closedPRCount,
}: PullRequestProps) {
  return (
    <Wrapper>
      <Content>
        <PullRequestTabHeader
          openPRCount={openPRCount}
          closedPRCount={closedPRCount}
          toggleTab={changeActiveTab}
        />
        {pullRequests?.map((pr, index) => (
          <PullRequestCard
            title={pr.title}
            number={pr.number}
            created_at={pr.created_at}
            openedBy={pr.user.login}
            state={getPullsState(pr)}
            messageCount={pr.comments.length}
            key={index}
          />
        ))}
      </Content>
      <PaginationContainer>
        <span className="prev">Previous</span>
        <span className="next">Next</span>
      </PaginationContainer>
    </Wrapper>
  );
}
