import { Content, PaginationContainer, Wrapper } from './PullRequest.style';

import type { PRTabValues } from '../types';
import type { PullRequest } from './PullRequest.type';
import PullRequestCard from '../PullRequestCard';
import PullRequestTabHeader from '../PRTabHeader';

type PullRequestProps = {
  pullRequests: PullRequest[];
  changeActiveTab: (value: PRTabValues) => void;
  openPRCount: number;
  closedPRCount: number;
};

export default function PullRequestView({
  pullRequests,
  changeActiveTab,
  openPRCount,
  closedPRCount,
}: PullRequestProps) {
  console.log('PullRequestView: ', pullRequests);

  return (
    <Wrapper>
      <Content>
        <PullRequestTabHeader
          openPRCount={openPRCount}
          closedPRCount={closedPRCount}
          toggleTab={changeActiveTab}
        />
        {pullRequests.map((pr, index) => (
          <PullRequestCard
            title={pr.title}
            openedNum={pr.openedNum}
            openedDay={pr.openedDay}
            openedBy={pr.openedBy}
            state={pr.state}
            messageCount={pr.messageCount}
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
