import IssueTabHeader from '../IssueTabHeader';
import IssueCard from '../IssueCard';
import { PaginationContainer, Content, Wrapper } from './Issue.style';
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
  console.log(issues);
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
      <PaginationContainer>
        <span className="prev">Previous</span>
        <span className="next">Next</span>
      </PaginationContainer>
    </Wrapper>
  );
}
