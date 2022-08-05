import { buildPrIssueResolution } from '../../helpers/buildPrIssueResolution';
import { format } from 'date-fns';

interface Props {
  title: string;
  number: string;
  created_at: string;
  openedBy: string;
  state: string;
}

export default function PullRequestIssueInfo({
  title,
  number,
  openedBy,
  created_at,
  state,
}: Props) {
  return (
    <div className="info">
      <a href="/" className="heading">
        {title}
      </a>
      <div className="sub_heading">
        <span className="opened_num">#{number}</span>
        <span className="opened_by">by {openedBy}</span>
        <span className="opened_day">
          {buildPrIssueResolution(state)}{' '}
          {format(new Date(created_at), 'MMM dd')}
        </span>
      </div>
    </div>
  );
}
