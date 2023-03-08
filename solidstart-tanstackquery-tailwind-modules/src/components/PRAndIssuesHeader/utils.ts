export const getSelectedMilestoneId = (
  milestoneOptions: { id: string; title: string }[],
  selectedMilestone: string | undefined
) =>
  selectedMilestone
    ? milestoneOptions.filter((mo) => mo.title === selectedMilestone)[0].id
    : undefined;
