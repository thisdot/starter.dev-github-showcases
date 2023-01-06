import type { IssueLabel } from '$lib/interfaces';
import type { GithubIssueLabel } from '$lib/interfaces/data-contract/github';

export const remapIssueLabel = (label: GithubIssueLabel): IssueLabel => {
  return {
    color: label.color,
    default: label.default,
    description: label.description,
    id: label.id,
    name: label.name,
    url: label.url,
  };
};
