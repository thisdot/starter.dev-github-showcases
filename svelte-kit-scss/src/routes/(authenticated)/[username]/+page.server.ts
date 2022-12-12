import type { PageServerLoad } from './$types';
import { buildRepositoryCardViewModel, createLanguageMap } from '$lib/helpers';
import { OrganizationService, UserService, RepositoryService } from '$lib/services';
import type { AllRepositoriesListViewModel } from '$lib/components/RepositoryList/view-models';

export const load: PageServerLoad = async ({ fetch, params: { username } }) => {
  const userService = new UserService(fetch);
  const organizationService = new OrganizationService(fetch);
  const repositoryService = new RepositoryService(fetch);

  const [profile, organizations, repositories] = await Promise.all([
    userService.getUserProfile(username),
    organizationService.listOrganizationsForUser(username),
    repositoryService.getUserRepositories(username),
  ]);

  const allRepositoriesListViewModel: AllRepositoriesListViewModel = {
    repositories: repositories.map(buildRepositoryCardViewModel),
  };

  return {
    profile,
    organizations,
    allRepositoriesListViewModel,
    username,
    repoLanguageList: createLanguageMap(repositories),
  };
};
