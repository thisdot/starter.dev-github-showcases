import FetchApi, { ApiProps } from './api';
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

  const data: ApiProps<undefined> = {
    query: LOGGEDIN_USER_PROFILE,
  };
  const resp = (await FetchApi(data)) as Response;

  return resp.data?.viewer || null;
};

export default getViewerProfile;
