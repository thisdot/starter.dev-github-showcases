interface Props {
  milestoneOptions: {
    title: string;
    id: string;
  }[];
  selectedMilestone: string;
}

export const getSelectedMilestoneId = (milestoneOptions, selectedMilestone): Props =>
  selectedMilestone
    ? milestoneOptions.filter((mo) => mo.title === selectedMilestone)[0].id
    : undefined;
