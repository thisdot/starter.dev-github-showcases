export interface GithubRepoContentsItem {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string | null;
  type: string;
  _links: {
    self: string;
    git: string;
    html: string;
  };
}

export interface GithubFileContentsItem extends GithubRepoContentsItem {
  content: string;
  encoding: string;
}

export type FileContents = Pick<GithubFileContentsItem, 'content' | 'name' | 'type' | 'size'>;
