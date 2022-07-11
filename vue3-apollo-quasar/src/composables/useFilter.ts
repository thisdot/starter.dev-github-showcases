import { computed } from 'vue';

export function useFilter(repos, state) {
  return computed(() => {
    if (repos.value.length < 1) {
      return repos;
    }
    return repos.value.reduce((acc, repo) => {
      if (
        state.value !== '' &&
        !repo.name.toLocaleLowerCase().includes(state.value.toLocaleLowerCase())
      ) {
        return acc;
      }

      return [...acc, repo];
    }, []);
  });
}
