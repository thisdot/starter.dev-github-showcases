import PullRequestTabHeader from '../PRTabHeader';
import PullRequestCard from '../PullRequestCard';
import { PaginationContainer, Content, Wrapper } from './PullRequest.style';
import type { PullRequest } from './PullRequest.type';
import type { PRTabValues } from '../types';

type PullRequestProps = {
  pullRequests: PullRequest[];
  changeActiveTab: (value: PRTabValues) => void;
};

export default function PullRequestView({
  pullRequests,
  changeActiveTab,
}: PullRequestProps) {
  return (
    <Wrapper>
      <Content>
        <PullRequestTabHeader toggleTab={changeActiveTab} />
        {pullRequests.map((pr, index) => (
          <PullRequestCard
            title={pr.title}
            openedNum={pr.openedNum}
            openedDay={pr.openedDay}
            openedBy={pr.openedBy}
            status={pr.status}
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
