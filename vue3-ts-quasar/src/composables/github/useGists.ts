import { Ref, watch } from 'vue';
import { parseQuery } from '@/components/GistsPanel/parseQuery';
import { useQuery } from '@vue/apollo-composable';
import { USER_GISTS_QUERY } from './queries';
import { GistItem } from '../github/types';

interface UseGists {
  getUserGists: () => {
    data?: any;
    loading: Ref<boolean>;
  };
}

export const useGists = (): UseGists => {
  const getUserGists = () => {
    const { result, loading } = useQuery(USER_GISTS_QUERY);
    watch(result, (value) => {
      if (!loading.value) {
        // console.log(value);
        const gists: GistItem[] = parseQuery(value);
        // console.log(gists);
        return { data: gists, loading };
      }
    });
    return { loading };
  };
  return { getUserGists };
};
