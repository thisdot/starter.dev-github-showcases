export interface Gists {
  id: string;
  description: string;
  url: string;
  name: string;
  files: {
    name: string;
  }[];
}
