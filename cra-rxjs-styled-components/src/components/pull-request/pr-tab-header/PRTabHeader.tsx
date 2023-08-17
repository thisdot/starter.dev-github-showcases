import { Container, StatusLabel, StatusTab } from './PRTabHeader.style';
import { useState } from 'react';

import CorrectIcon from '../../icons/CorrectIcon';
import type { PRTabValues } from '../types';
import PullRequestIcon from '../../icons/PullRequestIcon';
import { useRepo } from '../../../context/RepoContext';
import { SORT_OPTIONS } from '../../../constants/data';
import FilterDropdown from '../../../components/filter-dropdown/FilterDropdown';

interface Props {
	toggleTab: any;
	openPRCount: number;
	closedPRCount: number;
}

export default function PullRequestTabHeader(props: Props) {
	const [activeTab, setActiveTab] = useState<PRTabValues>('open');
	const { toggleTab } = props;

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

	const changeTab = (value: PRTabValues) => {
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
					<PullRequestIcon />
					<span>{props.openPRCount}</span>
					<span>Open</span>
				</StatusLabel>
				<StatusLabel
					onClick={() => changeTab('close')}
					active={activeTab === 'close'}
				>
					<CorrectIcon />
					<span>{props.closedPRCount}</span>
					<span>Close</span>
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
