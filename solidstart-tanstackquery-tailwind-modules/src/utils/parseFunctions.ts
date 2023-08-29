import { MilestoneProps } from '~/types/issues-type';
import { Label } from '~/types/label-type';

export function parseMilestones(milestones: { nodes: MilestoneProps[] }) {
  const nodes = milestones?.nodes || [];
  return nodes.reduce((milestones: MilestoneProps[], milestone) => {
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

export function parseLabels(labels: { nodes: Label[] }) {
  const nodes = labels?.nodes || [];
  return nodes.reduce((labels: Label[], label) => {
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
