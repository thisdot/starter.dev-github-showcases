import { MilestoneProps } from '~/types';

export const cleanUpParams = (params: Record<string, string>) => {
  if ('path' in params && params.path[params.path.length - 1] === '/') {
    params.path = params.path.slice(0, params.path.length - 1);
  }
  return params;
};

export const getTime = (time: string) => new Date(time).getTime();

export function parseMilestones(milestones?: MilestoneProps) {
  const nodes = milestones?.nodes || [];
  return nodes.map((milestone) => ({
    id: milestone.id,
    closed: milestone.closed,
    title: milestone.title,
    number: milestone.number,
    description: milestone.description,
  }));
}
