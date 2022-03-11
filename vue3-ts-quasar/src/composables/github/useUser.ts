import { useQuery, useResult } from '@vue/apollo-composable';
import { Ref } from 'vue';

import { USER_PROFILE_QUERY } from './queries';
import { User } from './types';

interface UseRepository {
  getUserProfile: (username: string) => {
    data: Ref<User | null>;
    loading: Ref<boolean>;
  };
}

export const useUser = (): UseRepository => {
  /** Get the currently logged in user's GitHub profile
   * @param {String} username The username of the currently logged in user. Can be retrieved from store
   */
  const getUserProfile = (username: string) => {
    const { result, loading } = useQuery(USER_PROFILE_QUERY, {
      username,
    });

    const data = useResult(result, [], ({ user }) => ({
      ...user,
    }));

    return { data: data as Ref<User | null>, loading };
  };

  return { getUserProfile };
};
