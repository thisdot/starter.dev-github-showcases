import FetchApi from './api';
import { ISSUES_QUERY } from './queries/issues';
import {
  MilestoneProps,
  Variables,
  Response,
  IssueProps,
  Issue,
} from '../types/issues-type';
import { useAppStore } from '../hooks/stores';
import { Label } from '../types/label-type';

function parseIssues(data: IssueProps) {
  if (!data) {
    return {
      issues: [],
      totalCount: 0,
      pageInfo: { hasNextPage: false, hasPreviousPage: false },
    };
  }

  const pageInfo = data.pageInfo;
  const nodes = data.nodes || [];
  const totalCount = data.totalCount;

  const issues = nodes.reduce((issues: Issue[], issue) => {
    if (!issue) {
      return issues;
    }

    const labelNodes: Label[] = issue.labels?.nodes || [];
    const labels = labelNodes.reduce(
      (labels: Label[], label) =>
        label
          ? [
              ...labels,
              {
                color: label.color,
                name: label.name,
              },
            ]
          : labels,
      []
    );

    return [
      ...issues,
      {
        login: issue.author?.login,
        commentCount: issue.comments.totalCount,
        labelCount: issue.labels.totalCount,
        labels,
        title: issue.title,
        number: issue.number,
        createdAt: issue.createdAt,
        closedAt: issue.closedAt,
        state: issue.state,
        url: issue.url,
      },
    ];
  }, []);

  return { issues, totalCount, pageInfo };
}

function parseMilestones(milestones: { nodes: MilestoneProps[] }) {
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

function parseLabels(labels: { nodes: Label[] }) {
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

const getIssues = async ({
  owner,
  name,
  orderBy = 'CREATED_AT',
  direction = 'DESC',
  filterBy,
  before,
  after,
  first,
  last,
}: Variables) => {
  try {
    useAppStore.setState({ isLoading: true });
    const data = {
      query: ISSUES_QUERY,
      variables: {
        owner,
        name,
        first,
        last,
        orderBy,
        direction,
        filterBy,
        before,
        after,
      },
    };
    const resp = (await FetchApi(data)) as Response;
    const repository = resp.data?.repository;
    const closedIssues = parseIssues(repository?.closedIssues);
    const openIssues = parseIssues(repository?.openIssues);
    const milestones = parseMilestones(repository?.milestones);
    const labels = parseLabels(repository?.labels);

    const issues = {
      openIssues,
      closedIssues,
      milestones,
      labels,
    };

    useAppStore.setState({ isLoading: false, issues });
  } catch (err) {
    useAppStore.setState({ isLoading: false, error: err.message });
  }
};

export default getIssues;
