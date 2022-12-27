import { getTime } from '~/utils/helpers';
import { PullRequest, PullRequestOrderField, OrderDirection } from './types';

export const sortPullRequestData = (sortByData: string, pullRequests: PullRequest[]): PullRequest[] => {
  const response = pullRequests.slice();
  if (sortByData === `${PullRequestOrderField.Comments}^${OrderDirection.Desc}`) {
    response.sort((a, b) => {
      return b.comments.totalCount - a.comments.totalCount;
    });
  } else if (sortByData === `${PullRequestOrderField.Comments}^${OrderDirection.Asc}`) {
    response.sort((a, b) => a.comments.totalCount - b.comments.totalCount);
  } else if (sortByData === `${PullRequestOrderField.CreatedAt}^${OrderDirection.Desc}`) {
    response.sort((a, b) => getTime(b.createdAt) - getTime(a.createdAt));
  } else if (sortByData === `${PullRequestOrderField.CreatedAt}^${OrderDirection.Asc}`) {
    response.sort((a, b) => getTime(a.createdAt) - getTime(b.createdAt));
  } else if (sortByData === `${PullRequestOrderField.ClosedAt}^${OrderDirection.Desc}`) {
    response.sort((a, b) => {
      if (a.closedAt && b.closedAt) {
        return getTime(b.closedAt) - getTime(a.closedAt);
      } else return 1;
    });
  } else {
    response.sort((a, b) => {
      if (a.closedAt && b.closedAt) {
        return getTime(a.closedAt) - getTime(b.closedAt);
      } else return 1;
    });
  }
  return response;
};
