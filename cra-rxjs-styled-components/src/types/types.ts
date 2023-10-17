import { Issue, User } from '../components/repo-issues/Issues/Issue.type';
import { PullRequests } from '../components/pull-request/pull-request/PullRequest.type';

export type IssueType = 'issue' | 'pr';
export type State = 'open' | 'closed' | 'merged';
export type IssueTabValues = 'open' | 'closed';
export type DropdownTitle = 'Label' | 'Sort' | 'Milestones';

export type IssueDetails = {
	total_count: number;
	incomplete_results: boolean;
	items: Issue[];
};

export type IssueTypes = {
	closed: IssueDetails;
	open: IssueDetails;
};

export type FileItem = {
	name: string;
	path: string;
};

export type FileInfo = {
	files: FileItem[];
	directories: FileItem[];
};

export type IssuePRTypes = {
	closed: IssueDetails | PullRequests;
	open: IssueDetails | PullRequests;
};

export type IssuePRData = {
	title: string;
	number: string;
	created_at: string;
	openedBy?: string;
	state: State;
	closed_at?: Date | null;
	merged_at?: Date | null;
	user: User;
	url: string;
	repository_url?: string;
	comments: number;
	isMerged?: boolean;
	labels: { color: string; name: string }[];
};
