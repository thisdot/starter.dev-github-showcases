import type { PageServerLoad } from './$types';
import { ENV } from '$lib/constants/env';
import type { GithubFileContentsItem, FileContents } from '$lib/interfaces';
import { mapLanguageExt, remapFileContents } from '$lib/helpers/file';
import Prism from 'prismjs';
import loadPrismLanguages from 'prismjs/components/index';

export const ssr = false;

export const load: PageServerLoad = async ({ params: { username, repo, branch, file }, fetch }) => {
  const getFileContentsUrl = new URL(`/repos/${username}/${repo}/contents/${file}`, ENV.GITHUB_URL);
  getFileContentsUrl.searchParams.append('ref', branch);
  const fileContentsResponse: Response = await fetch(getFileContentsUrl);
  const fileContentsResponseData: GithubFileContentsItem = await fileContentsResponse.json();
  const fileContents: FileContents | undefined = remapFileContents(fileContentsResponseData);

  const extension: string | undefined = fileContents?.name.split('.').pop();
  const language = mapLanguageExt(extension);
  loadPrismLanguages(language);
  return {
    fileContents,
    prismLanguage: language ? Prism.languages[language] : undefined,
    language: language,
  };
};
