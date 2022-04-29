import { useEffect, useState } from 'react';
import { GITHUB_URL_BASE, GISTS_URL } from '../../constants/url.constants';
import { Gist, GistWithFilename } from '../../interfaces/gists.interfaces';
import { fromFetchWithAuth } from '../auth/from-fetch-with-auth';
import {
  filter,
  map,
  Subscription,
  Observable,
  switchMap,
  tap,
  zip,
} from 'rxjs';

export function useGists(): GistWithFilename[] {
  const [state, setState] = useState<GistWithFilename[]>([]);
  const [currentUser, setCurrentUser] = useState<string>('');

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
        switchMap((gists: Gist[]) => {
          const requests = gists.map(createGistRequest);

          return zip(...requests).pipe(
            map((gists) => {
              return mergeGists(gists);
            })
          );
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

function createGistRequest(gist: Gist): Observable<Gist> {
  return fromFetchWithAuth<Gist>(gist.url, {
    selector: (response: Response) => {
      return response.json();
    },
  });
}

function mergeGists(gists: Gist[]) {
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
}
