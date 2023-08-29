import FetchApi from './api';
import { useAuth } from '../auth';
import { ISSUES_QUERY } from './queries/issue-info';
import { GITHUB_GRAPHQL } from '../utils/constants';
import { Variables, Response, IssueProps, Issue } from '~/types/issues-type';
import { Label } from '~/types/label-type';
import { parseLabels, parseMilestones } from '~/utils/parseFunctions';

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
  const { authStore } = useAuth();

  const data = {
    url: `${GITHUB_GRAPHQL}`,
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
    headersOptions: {
      authorization: `Bearer ${authStore.token}`,
    },
  };
  const resp = (await FetchApi(data)) as Response;
  const repository = resp.data?.repository;
  const closedIssues = parseIssues(repository?.closedIssues);
  const openIssues = parseIssues(repository?.openIssues);
  const milestones = parseMilestones(repository?.milestones);
  const labels = parseLabels(repository?.labels);

  return {
    openIssues,
    closedIssues,
    milestones,
    labels,
  };
};

export default getIssues;
