import { useQuery, useResult } from '@vue/apollo-composable';
import { Ref } from 'vue';
import { ORGS_PROFILE_QUERY } from './queries';
import { OrgsProfile } from './types';

interface UseOrgProfile {
  getOrgProfile: (username: string) => {
    data: Ref<OrgsProfile | null>;
    loading: Ref<boolean>;
  };
}

export const useOrgProfile = (): UseOrgProfile => {
  const getOrgProfile = (username: string) => {
    const { result, loading } = useQuery(ORGS_PROFILE_QUERY, {
      username,
    });

    const data = useResult(result, [], ({ organization }) => ({
      ...organization,
    }));
    return { data: data as Ref<OrgsProfile | null>, loading };
  };

  return { getOrgProfile };
};
