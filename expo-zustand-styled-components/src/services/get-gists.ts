import { USER_GISTS_QUERY } from './queries/gists';
import FetchApi from './api';
import { Gists } from '../types/gists-type';
import { useAppStore } from '../hooks/stores';

interface Response {
  data: {
    viewer: {
      gists: {
        nodes: Gists[];
      };
    };
  };
}

const getGists = async () => {
  try {
    useAppStore.setState({ isLoading: true });
    const resp = (await FetchApi({ query: USER_GISTS_QUERY })) as Response;
    const gists = resp.data?.viewer.gists.nodes?.reduce(
      (acc: Gists[] | { name: string; url: string }[], gist) => {
        if (!gist) {
          return acc;
        }
        const files = gist.files ?? [];
        const gists = files.reduce(
          (_acc: { name: string; url: string }[], file) =>
            file
              ? [
                  ..._acc,
                  {
                    id: gist.id,
                    description: gist.description,
                    name: file.name || gist.name,
                    url: gist.url,
                  },
                ]
              : acc,
          []
        );
        return [...acc, ...gists];
      },
      []
    );
    useAppStore.setState({ isLoading: false, gists });
  } catch (err) {
    useAppStore.setState({ isLoading: false, error: err.message });
  }
};

export default getGists;
