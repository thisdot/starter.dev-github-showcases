import { useEffect, useState } from 'react';
import { GISTS_URL } from '../../constants/url.constants';
import { Gist, GistWithFilename } from '../../interfaces/gists.interfaces';
import { fromFetchWithAuth } from '../auth/from-fetch-with-auth';
import { filter, map, Subscription, tap } from 'rxjs';
import { useUser } from '../../context/UserProvider';

export function useGists(): GistWithFilename[] {
  const [state, setState] = useState<GistWithFilename[]>([]);
  const user = useUser();

  /**
   * @todo Refactor getting the currently authenticated user's username into
   *       a global context.
   */

  useEffect(() => {
    const subscription: Subscription = fromFetchWithAuth<Gist[]>(
      GISTS_URL(user?.login as string),
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
  }, [user]);

  return state;
}
