export type IssueType = 'issue' | 'pr';
export type State = 'open' | 'closed';
export type IssueTabValues = 'open' | 'closed';
export type DropdownTitle = 'Label' | 'Sort' | 'Milestones';

export type IssueDetails = {
  total_count: number;
  incomplete_results: boolean;
  items: any[];
};

export type IssueTypes = {
  closed: IssueDetails;
  open: IssueDetails;
};
