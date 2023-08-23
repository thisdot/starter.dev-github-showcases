export const getSelectedMilestoneNumber = (
  milestoneOptions: { number: number; title: string }[],
  selectedMilestone: string | undefined
) =>
  selectedMilestone
    ? milestoneOptions
        .filter((mo) => mo.title === selectedMilestone)[0]
        .number.toString()
    : undefined;
