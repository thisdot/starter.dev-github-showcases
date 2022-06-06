import { useFormatDistance } from '../../../hooks/formatDistance/use-format-distance';
import { Issue } from '../Issues/Issue.type';

interface Props {
  issue: Issue;
}

export default function IssueCardIssueInfo({ issue }: Props) {
  const baseDate = new Date();
  const formatDistance = useFormatDistance;

  return (
    <div className="info">
      <a href="#" className="heading">
        {issue.title}
      </a>
      <div className="sub_heading">
        <span className="opened_num">#{issue.number}</span>
        {issue.state === 'open' ? (
          <span className="opened_day">
            opened{' '}
            {formatDistance({
              date: issue.created_at,
              dateToCompare: baseDate,
            })}{' '}
            ago
          </span>
        ) : (
          <span className="opened_day">closed {issue.closed_at} ago</span>
        )}
        <span className="opened_by">by {issue.user.login}</span>
      </div>
    </div>
  );
}
