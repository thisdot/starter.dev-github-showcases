import { Milestone } from './github';

export const getSelectedMilestoneNumber = (
  milestoneOptions?: any[],
  selectedMilestone?: string
): string | undefined =>
  selectedMilestone
    ? (milestoneOptions || [])
        .filter((mo) => mo.title === selectedMilestone)[0]
        .number.toString()
    : undefined;
