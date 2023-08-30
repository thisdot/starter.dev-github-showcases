// import { Label, Milestone } from '@components/RepoIssues';

import { Label, Milestone, MilestoneConnection } from './github';

export function parseMilestones(milestones: any) {
  return (milestones?.nodes || []).map((milestone: any) => ({
    id: milestone?.id,
    closed: milestone?.closed,
    title: milestone?.title,
    number: milestone?.number,
    description: milestone?.description,
  }));
}

export function parseLabels(labels: any) {
  return labels.nodes.map((label: any) => ({
    color: label.color,
    name: label.name,
  }));
}
