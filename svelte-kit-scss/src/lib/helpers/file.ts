import type { FileContents, GithubFileContentsItem } from '$lib/interfaces';
import type { Language } from '$lib/components/FileViewer/types/language';

export const mapLanguageExt = (extension?: string): Language | undefined => {
  switch (extension?.toLowerCase()) {
    case 'html':
    case 'xhtml':
    case 'xml':
      return 'markup';
    case 'sh':
    case 'bash':
    case 'zsh':
      return 'bash';
    case 'c':
      return 'c';
    case 'cpp':
    case 'cc':
    case 'h':
      return 'cpp';
    case 'css':
      return 'css';
    case 'js':
      return 'javascript';
    case 'jsx':
      return 'jsx';
    case 'coffee':
      return 'coffeescript';
    case 'patch':
    case 'diff':
      return 'diff';
    case 'git':
      return 'git';
    case 'go':
      return 'go';
    case 'graphql':
    case 'gql':
      return 'graphql';
    case 'handlebars':
    case 'hbs':
      return 'handlebars';
    case 'json':
      return 'json';
    case 'less':
      return 'less';
    case 'md':
      return 'markdown';
    case 'm':
      return 'objectivec';
    case 'ocaml':
    case 'ml':
      return 'ocaml';
    case 'py':
    case 'py3':
    case 'pyc':
    case 'pyo':
    case 'pyw':
    case 'pyx':
      return 'python';
    case 're':
    case 'rei':
      return 'reason';
    case 'sass':
      return 'sass';
    case 'scss':
      return 'scss';
    case 'sql':
      return 'sql';
    case 'stylus':
      return 'stylus';
    case 'tsx':
      return 'tsx';
    case 'ts':
      return 'typescript';
    case 'wasm':
      return 'wasm';
    case 'yml':
    case 'yaml':
      return 'yaml';
    default:
      return undefined;
  }
};

export const remapFileContents = (
  responseData?: GithubFileContentsItem
): FileContents | undefined => {
  return responseData
    ? {
        content: Buffer.from(responseData.content, 'base64').toString('binary'),
        name: responseData.name,
        size: responseData.size,
        type: responseData.type,
      }
    : undefined;
};
