import { Label } from '@/composables/github/types';
import { MilestoneProps } from '@/composables/github/types/Milestones';

export function parseMilestones(milestones: {
  nodes: MilestoneProps[];
}): MilestoneProps[] {
  const nodes = milestones?.nodes || [];
  return nodes.map((milestone) => ({
    id: milestone.id,
    closed: milestone.closed,
    title: milestone.title,
    number: milestone.number,
    description: milestone.description,
  }));
}

export function parseLabels(labels: { nodes: Label[] }): Label[] {
  const nodes = labels?.nodes || [];
  return nodes.map((label) => ({
    color: label.color,
    name: label.name,
  }));
}
