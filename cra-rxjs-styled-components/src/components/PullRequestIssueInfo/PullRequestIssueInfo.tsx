interface Props {
  title: string;
  openedNum: string;
  openedDay: string;
  openedBy: string;
}

export default function PullRequestIssueInfo({
  title,
  openedNum,
  openedBy,
  openedDay,
}: Props) {
  return (
    <div className="info">
      <a href="/" className="heading">
        {title}
      </a>
      <div className="sub_heading">
        <span className="opened_num">{openedNum}</span>
        <span className="opened_day">{openedDay}</span>
        <span className="opened_by">{openedBy}</span>
      </div>
    </div>
  );
}
