import { RepoPullRequestsQuery } from '@lib/github';

type MilestoneType = Extract<RepoPullRequestsQuery['repository'], { milestones?: any }>['milestones'];
type LabelsType = Extract<RepoPullRequestsQuery['repository'], { labels?: any }>['labels'];

export function parseMilestones(milestones: MilestoneType) {
  return (milestones?.nodes || []).map((milestone) => ({
    id: milestone?.id,
    closed: milestone?.closed,
    title: milestone?.title,
    number: milestone?.number,
    description: milestone?.description,
  }));
}

export function parseLabels(labels: LabelsType) {
  return (labels?.nodes || []).map((label) => ({
    color: label?.color,
    name: label?.name,
  }));
}
