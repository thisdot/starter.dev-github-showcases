import {
	Label,
	MilestoneProps,
} from '../components/repo-issues/Issues/Issue.type';
import type { ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';

export interface RepoContextInterface {
	name: string;
	owner: string;
	branch: string;
	path: string;
	isRepoLoading?: boolean;
	basePath: string;
	data?: {
		isPrivate: boolean;
		stargazerCount: number;
		forkCount: number;
		watcherCount: number;
		openIssueCount: number;
		openPullRequestCount: number;
		description?: string | null;
		homepageUrl?: string | null;
		topics: string[];
		isOrg: boolean;
	};
	label?: string;
	milestone?: string;
	setLabel?: (value: string) => void;
	setMilestone?: (value: string) => void;
	labels?: Label[];
	milestones?: MilestoneProps[];
	setLabels?: (value: Label[]) => void;
	setMilestones?: (value: MilestoneProps[]) => void;
	sortBy?: string;
	setSortBy?: (value: string) => void;
	resetFilterValues?: () => void;
	isFilteredOrSorted?: boolean;
}

interface RepoProviderProps {
	children: ReactNode;
	value: RepoContextInterface;
}

export const RepoContext = createContext<RepoContextInterface | undefined>(
	undefined
);

export function RepoProvider({ children, value }: RepoProviderProps) {
	const [labels, setLabels] = useState<Label[]>([]);
	const [milestones, setMilestones] = useState<MilestoneProps[]>([]);
	const [label, setLabel] = useState<string>('');
	const [milestone, setMilestone] = useState<string>('');
	const [sortBy, setSortBy] = useState<string>('');

	const resetFilterValues = () => {
		setLabel('');
		setMilestone('');
		setSortBy('');
	};

	const isFilteredOrSorted = label !== '' || sortBy !== '' || milestone !== '';

	return (
		<RepoContext.Provider
			value={{
				isRepoLoading: false,
				...value,
				labels,
				milestones,
				label,
				milestone,
				sortBy,
				setLabels,
				setMilestones,
				setLabel,
				setMilestone,
				setSortBy,
				resetFilterValues,
				isFilteredOrSorted,
			}}
		>
			{children}
		</RepoContext.Provider>
	);
}

export function useRepo() {
	const context = useContext(RepoContext);
	if (context === undefined) {
		throw new Error('useRepo must be used within a RepoPage');
	}
	return context;
}
