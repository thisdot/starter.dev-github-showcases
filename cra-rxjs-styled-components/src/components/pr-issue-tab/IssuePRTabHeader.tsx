import { useState } from 'react';

import { Container, StatusLabel, StatusTab } from './IssuePRTabHeader.styles';
import { useRepo } from '../../context/RepoContext';
import FilterDropdown from '../filter-dropdown/FilterDropdown';
import { CorrectIcon } from '../icons';
import OpenIssueIcon from '../icons/OpenIssueIcon';
import { SORT_OPTIONS } from '../../constants/data';
import PullRequestIcon from '../icons/PullRequestIcon';

interface Props {
	toggleTab: any;
	closedCount: number;
	openCount: number;
	type: 'issue' | 'pr';
}

export type IssuePRTabValues = 'open' | 'close';

export default function IssuePRTabHeader(props: Props) {
	const {
		labels,
		milestones,
		label,
		sortBy,
		milestone,
		setLabel,
		setMilestone,
		setSortBy,
	} = useRepo();
	const [activeTab, setActiveTab] = useState<IssuePRTabValues>('open');
	const { toggleTab, closedCount, openCount, type } = props;

	const changeTab = (value: IssuePRTabValues) => {
		toggleTab(value);
		setActiveTab(value);
	};

	const sortOptions = Object.values(SORT_OPTIONS);

	const labelOptions = (labels || []).map((label) => label.name) || [];
	const labelOptionsColors = (labels || []).map((label) => label.color) || [];
	const milestoneOptions =
		(milestones || []).map((milestone) => milestone.title) || [];

	return (
		<Container>
			<StatusTab className="pr-tab_left">
				<StatusLabel
					onClick={() => changeTab('open')}
					active={activeTab === 'open'}
				>
					{type === 'issue' ? <OpenIssueIcon /> : <PullRequestIcon />}
					<span>{openCount || 0}</span>
					<span>Open</span>
				</StatusLabel>
				<StatusLabel
					onClick={() => changeTab('close')}
					active={activeTab === 'close'}
				>
					<CorrectIcon />
					<span>{closedCount || 0}</span>
					<span>Closed</span>
				</StatusLabel>
			</StatusTab>
			<StatusTab className="pr-tab_right">
				<FilterDropdown
					flat
					name="Label"
					selected={label}
					items={labelOptions}
					itemsColors={labelOptionsColors}
					selectOption={setLabel}
				/>

				<FilterDropdown
					flat
					name="Milestone"
					selected={milestone}
					items={milestoneOptions}
					selectOption={setMilestone}
				/>

				<FilterDropdown
					flat
					name="Sort"
					selected={sortBy}
					items={sortOptions}
					selectOption={setSortBy}
				/>
			</StatusTab>
		</Container>
	);
}
