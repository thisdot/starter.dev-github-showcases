export const getSelectedMilestoneId = (milestoneOptions, selectedMilestone) =>
  selectedMilestone
    ? milestoneOptions.filter((mo) => mo.title === selectedMilestone)[0].id
    : undefined;
