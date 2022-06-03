export interface Gist {
  url: string;
  id: string;
  html_url: string;
  files: {
    [key: string]: {
      filename: string;
    };
  };
}

export interface GistWithFilename extends Gist {
  filename: string;
}
