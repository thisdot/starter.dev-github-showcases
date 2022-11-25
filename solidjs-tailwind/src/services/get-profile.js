import FetchApi from './api';
import { useAuth } from '../auth';
import { GITHUB_GRAPHQL } from '../helper/constants';

const getProfile = async () => {
  const { authStore } = useAuth();
  const query = `
  query LoggedinUser {
    viewer {
      avatarUrl
      name
      login
    }
  }
`;
  const data = {
    url: `${GITHUB_GRAPHQL}`,
    query,
    variables: null,
    headersOptions: {
      authorization: `Bearer ${authStore.token}`,
    },
  };
  const resp = await FetchApi(data);

  return resp.data?.viewer;
};

export default getProfile;
