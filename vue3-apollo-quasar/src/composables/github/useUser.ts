import { useQuery, useResult } from '@vue/apollo-composable';
import { Ref } from 'vue';

import { CURRENT_USER_QUERY, USER_PROFILE_QUERY } from './queries';
import { LoggedInUser, User } from './types';

interface UserRepository {
  getCurrentUser: () => {
    data: Ref<LoggedInUser | null>;
    loading: Ref<boolean>;
  };
  getUserProfile: (username: string) => {
    data: Ref<User | null>;
    loading: Ref<boolean>;
  };
}

export const useUser = (): UserRepository => {
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

  /** Get the currently logged in user's GitHub profile
   * @param {String} username The username of the currently logged in user. Can be retrieved from store
   */
  const getCurrentUser = () => {
    const { result, loading } = useQuery(CURRENT_USER_QUERY);

    const data = useResult(result, [], ({ viewer }) => ({
      ...viewer,
    }));

    return { data: data as Ref<LoggedInUser | null>, loading };
  };

  return { getCurrentUser, getUserProfile };
};
