export function getLanguage(extension?: string): undefined {
  let language;
  switch (extension?.toLowerCase()) {
    case 'html':
    case 'vue':
    case 'xhtml':
    case 'xml':
      language = 'markup';
      break;
    case 'sh':
    case 'bash':
    case 'zsh':
    case 'gitignore':
    case 'prettierignore':
      language = 'bash';
      break;
    case 'c':
      language = 'c';
      break;
    case 'cpp':
    case 'cc':
    case 'h':
      language = 'cpp';
      break;
    case 'css':
      language = 'css';
      break;
    case 'js':
      language = 'javascript';
      break;
    case 'jsx':
      language = 'jsx';
      break;
    case 'coffee':
      language = 'coffeescript';
      break;
    case 'patch':
    case 'diff':
      language = 'diff';
      break;
    case 'git':
      language = 'git';
      break;
    case 'go':
      language = 'go';
      break;
    case 'graphql':
    case 'gql':
      language = 'graphql';
      break;
    case 'handlebars':
    case 'hbs':
      language = 'handlebars';
      break;
    case 'json':
    case 'prettierrc':
      language = 'json';
      break;
    case 'less':
      language = 'less';
      break;
    case 'md':
      language = 'markdown';
      break;
    case 'm':
      language = 'objectivec';
      break;
    case 'ocaml':
    case 'ml':
      language = 'ocaml';
      break;
    case 'py':
    case 'py3':
    case 'pyc':
    case 'pyo':
    case 'pyw':
    case 'pyx':
      language = 'python';
      break;
    case 're':
    case 'rei':
      language = 'reason';
      break;
    case 'sass':
      language = 'sass';
      break;
    case 'scss':
      language = 'css';
      break;
    case 'sql':
      language = 'sql';
      break;
    case 'stylus':
      language = 'stylus';
      break;
    case 'tsx':
      language = 'tsx';
      break;
    case 'ts':
      language = 'typescript';
      break;
    case 'wasm':
      language = 'wasm';
      break;
    case 'yml':
    case 'yaml':
      language = 'yaml';
      break;
  }
  return language;
}
