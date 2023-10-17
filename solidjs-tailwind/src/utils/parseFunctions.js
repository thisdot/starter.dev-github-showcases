export function parseLabels(labels) {
  const nodes = labels?.nodes || [];
  return nodes.reduce((labels, label) => {
    if (!label) {
      return labels;
    }

    return [
      ...labels,
      {
        color: label.color,
        name: label.name,
      },
    ];
  }, []);
}

export function parseMilestones(milestones) {
  const nodes = milestones?.nodes || [];
  return nodes.reduce((milestones, milestone) => {
    if (!milestone) {
      return milestones;
    }

    return [
      ...milestones,
      {
        id: milestone.id,
        closed: milestone.closed,
        title: milestone.title,
        number: milestone.number,
        description: milestone.description,
      },
    ];
  }, []);
}
