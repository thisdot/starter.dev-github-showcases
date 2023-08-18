import ClosedIssueIcon from '../icons/ClosedIssueIcon';
import MessageIcon from '../icons/MessageIcon';
import OpenIssueIcon from '../icons/OpenIssueIcon';
import { IssuePRCardWrapper } from './IssuePRCard.styles';
import { State } from '../../types/types';
import IssuePRCardInfo from './IssuePRCardInfo';
import { Issue } from '../repo-issues/Issues/Issue.type';

interface Props {
	data: Issue | any;
}

export default function IssuePRCard({data}: Props) {
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
