import IssueTabHeader from '../issue-tab-header';
import IssueCard from '../issue-card';
import { PaginationContainer, Content, Wrapper } from './Issue.style';
import type { Issue } from './Issue.type';
import type { IssueTabValues } from '../types';

type IssueProps = {
  issues: Issue[];
  changeActiveTab: (value: IssueTabValues) => void;
};

export default function IssuesView({ issues, changeActiveTab }: IssueProps) {
  return (
    <Wrapper>
      <Content>
        <IssueTabHeader toggleTab={changeActiveTab} />
        {issues.map((issue, index) => (
          <IssueCard
            title={issue.title}
            openedNum={issue.openedNum}
            openedDay={issue.openedDay}
            openedBy={issue.openedBy}
            status={issue.status}
            messageCount={issue.messageCount}
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
