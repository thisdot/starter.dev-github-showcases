import { Milestone } from '~/components/issue-tab-view/type';

export const getSelectedMilestoneNumber = (milestoneOptions: Milestone[], selectedMilestone?: string) =>
  selectedMilestone ? milestoneOptions.filter((mo) => mo.title === selectedMilestone)[0].number.toString() : undefined;
