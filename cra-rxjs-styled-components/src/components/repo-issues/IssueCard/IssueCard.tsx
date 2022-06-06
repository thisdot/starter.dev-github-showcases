import ClosedIssueIcon from '../../icons/ClosedIssueIcon';
import MessageIcon from '../../icons/MessageIcon';
import OpenIssueIcon from '../../icons/OpenIssueIcon';
import IssueCardIssueInfo from '../IssueCardIssueInfo';
import { IssueCardWrapper } from './IssueCard.style';
import { Issue } from '../Issues/Issue.type';
import { State } from '../../../types/types';

interface Props {
  issue: Issue;
}

export default function IssueCard({ issue }: Props) {
  const getIssueIcon = (state: State) => {
    switch (state) {
      case 'closed':
        return <ClosedIssueIcon />;
      case 'open':
      default:
        return <OpenIssueIcon />;
    }
  };
  return (
    <IssueCardWrapper>
      <div className="left">
        {getIssueIcon(issue.state)}
        <IssueCardIssueInfo issue={issue} />
      </div>
      <div className="right">
        {issue.comments > 0 && (
          <a href="#" className="message">
            <MessageIcon />
            <span className="count">{issue.comments}</span>
          </a>
        )}
      </div>
    </IssueCardWrapper>
  );
}
