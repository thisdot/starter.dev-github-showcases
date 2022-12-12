import type { PageServerLoad } from './$types';
import { buildRepositoryCardViewModel, mapGistsToHomeGists } from '$lib/helpers';
import type { PublicProfileInformation, UserGistsApiResponse } from '$lib/interfaces';
import { ENV } from '$lib/constants/env';
import { RepositoryService } from '$lib/services';
import { RepositorySortFilters } from '$lib/enums';
import type { TopRepositoriesListViewModel } from '$lib/components/RepositoryList/view-models';

const DEFAULT_PAGE_SIZE = 200;

export const load: PageServerLoad = async ({ fetch, parent }) => {
  const { login }: PublicProfileInformation = await parent();

  const gistsURL = new URL(`/users/${login}/gists`, ENV.GITHUB_URL);
  const gistsPromise = fetch(gistsURL);

  const repositoryService = new RepositoryService(fetch);
  const repositoriesPromise = repositoryService.getAuthenticatedUserRepositories({
    sort: RepositorySortFilters.UPDATED,
    pagination: {
      perPage: DEFAULT_PAGE_SIZE,
    },
  });

  const [repositories, gistsRes] = await Promise.all([repositoriesPromise, gistsPromise]);

  const gists = (await gistsRes.json()) as UserGistsApiResponse;

  const topRepositoriesListViewModel: TopRepositoriesListViewModel = {
    repositories: repositories.map(buildRepositoryCardViewModel),
    viewAllRouteHref: `/${login}`,
  };
  return {
    topRepositoriesListViewModel,
    gists: mapGistsToHomeGists(gists),
  };
};
