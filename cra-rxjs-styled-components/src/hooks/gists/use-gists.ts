import { useEffect, useState } from 'react';
import { GITHUB_URL_BASE, GISTS_URL } from '../../constants/url.constants';
import { Gist, GistWithFilename } from '../../interfaces/gists.interfaces';
import { fromFetchWithAuth } from '../auth/from-fetch-with-auth';
import { filter, map, Subscription, tap } from 'rxjs';

export function useGists(): GistWithFilename[] {
  const [state, setState] = useState<GistWithFilename[]>([]);
  const [currentUser, setCurrentUser] = useState<string>('');

  /**
   * @todo Refactor getting the currently authenticated user's username into
   *       a global context.
   */
  const getCurrentUser = () =>
    fromFetchWithAuth<{
      login: string;
    }>(`${GITHUB_URL_BASE}/user`, {
      selector: (response: Response) => {
        return response.json();
      },
    });

  useEffect(() => {
    getCurrentUser().subscribe((user) => {
      setCurrentUser(user.login);
    });

    const subscription: Subscription = fromFetchWithAuth<Gist[]>(
      GISTS_URL(currentUser),
      {
        selector: (response: Response) => {
          return response.json();
        },
      }
    )
      .pipe(
        filter((gists) => !!gists.length),
        map((gists) => {
          return gists.map((gist) => {
            const { url, id, html_url, files } = gist;

            let filename = Object.keys(files)[0];
            filename = files[filename].filename;

            return {
              url,
              id,
              html_url,
              files,
              filename,
            };
          });
        }),
        tap(setState)
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [currentUser]);

  return state;
}
