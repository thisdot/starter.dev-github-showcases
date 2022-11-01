import type { UserGistsApiResponse, UserGistsState } from '../interfaces';

export const mapGistsToHomeGists = (gists: UserGistsApiResponse): UserGistsState[] => {
  if (gists) {
    return gists.map((gist) => ({
      url: gist.html_url,
      fileName: Object.keys(gist.files)[0],
    }));
  }
  return [];
};
