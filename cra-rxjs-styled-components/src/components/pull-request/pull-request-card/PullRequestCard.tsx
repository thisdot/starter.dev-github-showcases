import PullRequestCardIssueInfo from '../../pull-request-issue-info/PullRequestIssueInfo';
import MessageIcon from '../../icons/MessageIcon';
import { PullRequestCardWrapper } from './PullRequestCard.style';
import type { State } from '../types';
import { getPRIcon } from '../getPRIcon';

interface Props {
	state: State;
	title: string;
	number: string;
	created_at: string;
	openedBy: string;
	messageCount: number;
}

export default function PullRequestCard({
	state,
	title,
	openedBy,
	created_at,
	number,
	messageCount,
}: Props) {
	return (
		<PullRequestCardWrapper>
			<div className="left">
				{getPRIcon(state)}
				<PullRequestCardIssueInfo
					title={title}
					number={number}
					openedBy={openedBy}
					created_at={created_at}
					state={state}
				/>
			</div>
			<div className="right">
				{messageCount > 0 && (
					<a href="/" className="message">
						<MessageIcon />
						<span className="count">{messageCount}</span>
					</a>
				)}
			</div>
		</PullRequestCardWrapper>
	);
}
