import type { GithubRepoContentsItem } from '$lib/interfaces';

export const MOCK_REPOSITORY_CONTENT_TREE_FILE: GithubRepoContentsItem = {
  name: '.gitignore',
  path: '.gitignore',
  sha: '3956aa97732cfcc2ab535b85cd8bd99a20307859',
  size: 318,
  url: 'https://api.github.com/repos/thisdot/starter.dev-github-showcases/contents/.gitignore?ref=main',
  html_url: 'https://github.com/thisdot/starter.dev-github-showcases/blob/main/.gitignore',
  git_url:
    'https://api.github.com/repos/thisdot/starter.dev-github-showcases/git/blobs/3956aa97732cfcc2ab535b85cd8bd99a20307859',
  download_url:
    'https://raw.githubusercontent.com/thisdot/starter.dev-github-showcases/main/.gitignore',
  type: 'file',
  _links: {
    self: 'https://api.github.com/repos/thisdot/starter.dev-github-showcases/contents/.gitignore?ref=main',
    git: 'https://api.github.com/repos/thisdot/starter.dev-github-showcases/git/blobs/3956aa97732cfcc2ab535b85cd8bd99a20307859',
    html: 'https://github.com/thisdot/starter.dev-github-showcases/blob/main/.gitignore',
  },
};

export const MOCK_REPOSITORY_CONTENT_TREE_DIRECTORY: GithubRepoContentsItem = {
  name: 'svelte-kit-scss',
  path: 'svelte-kit-scss',
  sha: '7cc23f41e5b822a544ed933121abd118c5f1711e',
  size: 0,
  url: 'https://api.github.com/repos/thisdot/starter.dev-github-showcases/contents/svelte-kit-scss?ref=main',
  html_url: 'https://github.com/thisdot/starter.dev-github-showcases/tree/main/svelte-kit-scss',
  git_url:
    'https://api.github.com/repos/thisdot/starter.dev-github-showcases/git/trees/7cc23f41e5b822a544ed933121abd118c5f1711e',
  download_url: null,
  type: 'dir',
  _links: {
    self: 'https://api.github.com/repos/thisdot/starter.dev-github-showcases/contents/svelte-kit-scss?ref=main',
    git: 'https://api.github.com/repos/thisdot/starter.dev-github-showcases/git/trees/7cc23f41e5b822a544ed933121abd118c5f1711e',
    html: 'https://github.com/thisdot/starter.dev-github-showcases/tree/main/svelte-kit-scss',
  },
};
