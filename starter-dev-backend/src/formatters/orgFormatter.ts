import { Org } from '../types';

export const orgFormatter = (org: Org[] | Org) => {
  if (!org) {
    return null;
  }

  if (!Array.isArray(org)) {
    return {
      avatar: org.avatar_url,
      login: org.login,
      name: org.name,
      membersCount: org.members_url,
      reposCount: org.repos_url,
    };
  }

  return org.map((orgItem: Org | null) => ({
    avatar: orgItem?.avatar_url,
    login: orgItem?.login,
    name: orgItem?.name,
    membersCount: orgItem?.members_url,
    reposCount: orgItem?.repos_url,
  }));
};
