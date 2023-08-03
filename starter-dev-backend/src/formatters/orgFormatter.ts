import { Org } from '../types';

const formatter = (item: Org) => ({
  avatar: item?.avatar_url,
  login: item?.login,
  name: item?.name,
  membersCount: item?.members_url,
  reposCount: item?.repos_url,
});

export const orgFormatter = (org: Org[] | Org) => {
  if (!org) {
    return null;
  }

  if (!Array.isArray(org)) {
    return formatter(org);
  }

  return org.map((orgItem: Org | null) => {
    return formatter(orgItem as Org);
  });
};
