export const getSelectedMilestoneId = (milestoneOptions, selectedMilestone) => 
  milestoneOptions.filter((mo) => mo.title === selectedMilestone)[0].id