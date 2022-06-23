import { useQuery, useResult } from '@vue/apollo-composable';
import { Ref } from 'vue';
import { ORGANIZATION_REPOS_QUERY } from './queries';
import { OrganizationRepositories } from './types';

interface UseOrganizationRepositories {
  getOrganizationRepositories: (organization: string) => {
    data: Ref<OrganizationRepositories | null>;
    loading: Ref<boolean>;
  };
}

export const useOrganizationRepositories = (): UseOrganizationRepositories => {
  const getOrganizationRepositories = (organization: string) => {
    const { result, loading } = useQuery(ORGANIZATION_REPOS_QUERY, {
      organization,
      first: 2,
    });

    const data = useResult(result, [], ({ organization }) => ({
      ...organization,
    }));

    return { data: data as Ref<OrganizationRepositories | null>, loading };
  };

  return { getOrganizationRepositories };
};
