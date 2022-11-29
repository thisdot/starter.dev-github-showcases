export enum IssueMilestoneState {
  Open = 'open',
  Closed = 'closed',
}

export interface IssueMilestone {
  id: number;
  number: number;
  title: string;
  state: IssueMilestoneState;
}
