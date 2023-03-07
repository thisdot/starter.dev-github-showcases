import { useAuthStore } from '../hooks/stores';
import FetchApi from './api';
import { LOGGEDIN_USER_PROFILE } from './queries/viewer-info';

type Response = {
  data: {
    viewer: {
      login: string;
      name: string;
      avatarUrl: string;
    };
  };
};

const getViewerProfile = async () => {
  try {
    useAuthStore.setState({ isLoading: true });
    const resp = (await FetchApi({ query: LOGGEDIN_USER_PROFILE })) as Response;
    useAuthStore.setState({ isLoading: false, viewer: resp.data?.viewer || null });
  } catch (err) {
    useAuthStore.setState({ isLoading: false, error: err.message });
  }
};

export default getViewerProfile;
