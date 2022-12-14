import type { LayoutServerLoad } from './$types';
import { RepositoryService } from '$lib/services';

export const load: LayoutServerLoad = async ({ params: { username, repo }, fetch }) => {
  const repositoryService = new RepositoryService(fetch);

  const repositoryState = await repositoryService.getUserRepositoryState(username, repo);

  return {
    username,
    repo,
    repositoryState,
  };
};
