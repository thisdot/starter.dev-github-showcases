import { useEffect, useState } from 'react';
import { tap } from 'rxjs';
import { SINGLE_USER_REPO } from '../../constants/url.constants';
import { fromFetchWithAuth } from '../auth/from-fetch-with-auth';
import { useRepo } from '../../context/RepoContext';

export function useRepoExplorer() {
  const { owner, name, branch, path } = useRepo();
  const [fileData, setFileData] = useState<any[]>();

  const relativePath = path ? `/${path}` : '';
  const branchRef = branch ? `?ref=${branch}` : '';
  const repoUrl: string = `${SINGLE_USER_REPO(
    owner,
    name
  )}/contents${relativePath}${branchRef}`;

  const request = (url: string) =>
    fromFetchWithAuth(url, {
      selector: (response: Response) => {
        return response.json();
      },
    });

  useEffect(() => {
    const subscription = request(repoUrl)
      .pipe(
        tap((data) => {
          if (data) {
            setFileData(data);
          }
        })
      )
      .subscribe();
    return () => {
      subscription.unsubscribe();
    };
  }, [repoUrl]);

  const listOfDirectories = fileData
    ?.filter((obj) => obj.type === 'dir')
    .map((obj) => {
      return {
        name: obj.name,
        path: obj.path,
      };
    });
  const listOfFiles = fileData
    ?.filter((obj) => obj.type === 'file')
    .map((obj) => {
      return {
        name: obj.name,
        path: obj.path,
      };
    })
    .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

  return {
    directories: listOfDirectories || [],
    files: listOfFiles || [],
  };
}
