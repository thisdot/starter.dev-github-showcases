import { Ref } from 'vue';
import { parseQuery } from '@/components/GistsPanel/parseQuery';
import { useQuery, useResult } from '@vue/apollo-composable';
import { USER_GISTS_QUERY } from './queries';
import { GistItem } from '../github/types';

interface UseGists {
  getUserGists: () => {
    data?: any;
    loading: Ref<boolean>;
  };
}

export const useGists = (): UseGists => {
  const getUserGists = (): any => {
    const { result, loading } = useQuery(USER_GISTS_QUERY);
    const gists = useResult(result, [], (data) => parseQuery(data));
    return { data: gists, loading };
  };
  return { getUserGists };
};
