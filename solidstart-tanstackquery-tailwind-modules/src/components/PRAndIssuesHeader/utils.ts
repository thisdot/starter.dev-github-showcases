export const getSelectedMilestoneId = (
  milestoneOptions: any[],
  selectedMilestone: any
) =>
  selectedMilestone
    ? milestoneOptions.filter((mo) => mo.title === selectedMilestone)[0].id
    : undefined;
