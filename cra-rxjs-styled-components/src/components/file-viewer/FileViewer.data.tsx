// import type { Blob } from '@lib/github';
import cn from 'classnames';
import { Code } from 'react-content-loader';
import FileViewerView from './FileViewer.view';
import { mapExtensionToLanguage } from './mapExtensionToLanguage';
import { useRepo } from '../../context/RepoContext';
import { useEffect, useState } from 'react';
import { fromFetchWithAuth } from '../../hooks/auth/from-fetch-with-auth';

function FileViewer() {
  const { owner, name, branch, path, basePath } = useRepo();

  const [isLoading, setIsLoading] = useState(true);

  const [file, setFile] = useState(null);

  if (isLoading) {
    return (
      <div>
        <Code width={400} height={100} viewBox="-20 0 400 80" />
      </div>
    );
  }

  const request = (url: string) =>
    fromFetchWithAuth(url, {
      selector: (response: Response) => {
        return response.json();
      },
    });

  // useEffect(() => {
  //   const subscription = request('')
  //     .pipe(
  //       tap((data) => {
  //         if (data) {
  //           setRepos(data);
  //           setLoading(false);
  //         }
  //       })
  //     )
  //     .subscribe();
  //   return () => {
  //     subscription.unsubscribe();
  //   };
  // }, []);

  // const file = data?.repository?.blob as Blob | undefined;

  // const extension = path.split('.').pop();
  // const language = mapExtensionToLanguage(extension);
  // const text = file.text ? file.text : '';
  // const lines = text.split('\n').length;

  // return (
  //   <FileViewerView
  //     text={text}
  //     byteSize={file.byteSize}
  //     lines={lines}
  //     language={language}
  //   />
  // );
  return <Code width={400} height={100} viewBox="-20 0 400 80" />
}

export default FileViewer;
