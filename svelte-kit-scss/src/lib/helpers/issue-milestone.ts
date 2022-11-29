import {
  IssueMilestoneState,
  type GithubIssueMilestone,
  type IssueMilestone,
} from '$lib/interfaces';

export const remapIssueMilestone = (milestone: GithubIssueMilestone): IssueMilestone => {
  if (!Object.values(IssueMilestoneState).map(String).includes(milestone.state)) {
    throw new Error(`Invalid Milestone State: ${milestone.state}`);
  }
  return {
    id: milestone.id,
    number: milestone.number,
    title: milestone.title,
    state: <IssueMilestoneState>String(milestone.state),
  };
};
