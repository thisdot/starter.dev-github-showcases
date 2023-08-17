import { useState } from 'react';
import CorrectIcon from '../../icons/CorrectIcon';
import OpenIssueIcon from '../../icons/OpenIssueIcon';
import type { IssueTabValues } from '../../../types/types';

import { Container, StatusLabel, StatusTab } from './IssueTabHeader.styles';
import { useRepo } from '../../../context/RepoContext';
import FilterDropdown from '../../../components/filter-dropdown/FilterDropdown';
import { SORT_OPTIONS } from '../../../constants/data';

interface Props {
	toggleTab: any;
	closedCount: number;
	openCount: number;
}

export default function IssueTabHeader(props: Props) {
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
	const [activeTab, setActiveTab] = useState<IssueTabValues>('open');
	const { toggleTab, closedCount, openCount } = props;

	const changeTab = (value: IssueTabValues) => {
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
					<OpenIssueIcon />
					<span>{openCount}</span>
					<span>Open</span>
				</StatusLabel>
				<StatusLabel
					onClick={() => changeTab('closed')}
					active={activeTab === 'closed'}
				>
					<CorrectIcon />
					<span>{closedCount}</span>
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
