import { useQuery, useResult } from '@vue/apollo-composable';
import { USER_GISTS_QUERY } from './queries';
import { GistItem, UseGist } from './types';
import { Ref } from 'vue';

export const useGist = (): UseGist => {
  const getUserGists = () => {
    const { result, loading } = useQuery(USER_GISTS_QUERY);
    const gists = useResult(result, [], (data) =>
      data.viewer.gists.nodes?.reduce((acc: GistItem[], gist) => {
        if (!gist) {
          return acc;
        }
        const files = gist.files ?? [];
        const gists = files.reduce(
          (_acc: GistItem[], file) =>
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
          [],
        );
        return [...acc, ...gists];
      }, []),
    );
    return { data: gists as Readonly<Ref<Readonly<[] | GistItem[]>>>, loading };
  };
  return { getUserGists };
};
