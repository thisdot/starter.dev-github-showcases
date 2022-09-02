import ClosedIssueIcon from '../../icons/ClosedIssueIcon';
import MessageIcon from '../../icons/MessageIcon';
import OpenIssueIcon from '../../icons/OpenIssueIcon';
import PullRequestIssueInfo from '../../pull-request-issue-info';
import { IssueCardWrapper } from './IssueCard.style';
import type { Status } from '../types';
import { Link } from 'react-router-dom';

interface Props {
	status: Status;
	title: string;
	openedNum: string;
	openedDay: string;
	openedBy: string;
	messageCount: number;
}

export default function IssueCard({
	status,
	title,
	openedBy,
	openedDay,
	openedNum,
	messageCount,
}: Props) {
	const getPRIcon = (status: Status) => {
		if (status === 'open') {
			return <OpenIssueIcon />;
		} else {
			return <ClosedIssueIcon />;
		}
	};
	return (
		<IssueCardWrapper>
			<div className="left">
				{getPRIcon(status)}
				<PullRequestIssueInfo
					title={title}
					number={openedNum}
					openedBy={openedBy}
					created_at={openedDay}
					state={status}
				/>
			</div>
			<div className="right">
				{messageCount > 0 && (
					<Link to="/" className="message">
						<MessageIcon />
						<span className="count">8</span>
					</Link>
				)}
			</div>
		</IssueCardWrapper>
	);
}
