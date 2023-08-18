import ClosedIssueIcon from '../icons/ClosedIssueIcon';
import MessageIcon from '../icons/MessageIcon';
import OpenIssueIcon from '../icons/OpenIssueIcon';
import { IssuePRCardWrapper } from './IssuePRCard.styles';
import { State } from '../../types/types';
import IssuePRCardInfo from './IssuePRCardInfo';
import { Issue } from '../repo-issues/Issues/Issue.type';
import { ClosedPRIcon } from '../icons';
import OpenPRIcon from '../icons/OpenPRIcon';

interface Props {
	data: Issue | any;
	type: 'pr' | 'issue';
}

export default function IssuePRCard({ data, type }: Props) {
	const getIssueIcon = (state: State) => {
		switch (state) {
			case 'closed':
				return type === 'issue' ? <ClosedIssueIcon /> : <ClosedPRIcon />;
			case 'open':
			default:
				return type === 'issue' ? <OpenIssueIcon /> : <OpenPRIcon />;
		}
	};
	return (
		<IssuePRCardWrapper>
			<div className="left">
				{getIssueIcon(data.state)}
				<IssuePRCardInfo {...data} />
			</div>
			<div className="right">
				{data.comments > 0 && (
					<div className="message">
						<MessageIcon />
						<span className="count">{data.comments}</span>
					</div>
				)}
			</div>
		</IssuePRCardWrapper>
	);
}
