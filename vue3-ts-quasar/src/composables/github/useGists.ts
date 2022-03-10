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
    // const { onResult } = useQuery(USER_GISTS_QUERY);
    const { result, loading } = useQuery(USER_GISTS_QUERY);
    watch(result, (value) => {
      if (!loading.value) {
        const gists: GistItem[] = parseQuery(value);
        console.log('Start data from watch() on userGists query');
        console.log('DATA FROM USEGISTS:', gists);
        console.log('LOADING STATE FROM USEGISTS:', loading.value);
        console.log('End data from watch() on userGists query');
        return { data: gists, loading };
      }
    });
    return { loading };
    // onResult((queryResult) => {
    //   console.log(queryResult);
    // return { data: queryResult.value, loading: queryResult.loading };
    // });
  };
  return { getUserGists };
};
