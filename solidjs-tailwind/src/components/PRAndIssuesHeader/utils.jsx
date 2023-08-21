export const getSelectedMilestoneNumber = (
  milestoneOptions,
  selectedMilestone
) =>
  selectedMilestone
    ? milestoneOptions
        .filter((mo) => mo.title === selectedMilestone)[0]
        .number.toString()
    : undefined;
