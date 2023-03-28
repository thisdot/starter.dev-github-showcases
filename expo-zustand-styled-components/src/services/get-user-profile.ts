import { USER_PROFILE_QUERY } from './queries/user-profile';
import FetchApi from './api';
import { UserProfile } from '../types/user-profile-type';
import { useAuthStore } from '../hooks/stores';

type UserProfileVariables = {
  username: string;
};

type Response = {
  data: {
    user: UserProfile;
  };
};

const getUserProfile = async (variables: UserProfileVariables) => {
  try {
    useAuthStore.setState({ isLoading: true, error: null });
    const resp = (await FetchApi({ query: USER_PROFILE_QUERY, variables })) as Response;
    useAuthStore.setState({ isLoading: false, user: resp.data?.user || null });
  } catch (err) {
    useAuthStore.setState({ isLoading: false, error: err.message });
  }
};

export default getUserProfile;
