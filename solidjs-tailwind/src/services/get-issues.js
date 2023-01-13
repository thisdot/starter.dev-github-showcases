import FetchApi from './api';
import { useAuth } from '../auth';
import { ISSUES_QUERY } from './queries/issue-info';
import { GITHUB_GRAPHQL } from '../utils/constants';


function parseIssues(connection) {
  if (!connection) {
    return {
      issues: [],
      totalCount: 0,
      pageInfo: { hasNextPage: false, hasPreviousPage: false },
    };
  }

  const pageInfo = connection.pageInfo;
  const nodes = connection.nodes || [];
  const totalCount = connection.totalCount;

  const issues = nodes.reduce((issues, issue) => {
    if (!issue) {
      return issues;
    }

    const labelNodes = issue.labels?.nodes || [];
    const labels = labelNodes.reduce(
      (labels, label) =>
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
        id: issue.id,
        login: issue.author?.login,
        commentCount: issue.comments.totalCount,
        labelCount: issue.labels.totalCount,
        labels,
        closed: issue.closed,
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

const getIssues = async ({ owner, name, after, before, orderBy, direction, labels }) => {
  const { authStore } = useAuth();

  const data = {
    url: `${GITHUB_GRAPHQL}`,
    query: ISSUES_QUERY,
    variables: {
      owner,
      name,
      first: 30,
      labels,
      after,
      before,
      orderBy,
      direction,
    },
    headersOptions: {
      authorization: `Bearer ${authStore.token}`,
    },
  };
  const resp = await FetchApi(data);
  const repository = resp.data?.repository;
  const closedIssues = parseIssues(repository?.closedIssues);
  const openIssues = parseIssues(repository?.openIssues);

  const labelMap = [...closedIssues.issues, ...openIssues.issues].reduce(
    (acc, issue) => {
      const map = {};
      issue.labels.forEach((label) => {
        map[label.name] = label;
      });
      return {
        ...acc,
        ...map,
      };
    },
    {}
  );

  return {
    openIssues,
    closedIssues,
    labels: Object.values(labelMap),
  };
};

export default getIssues;
