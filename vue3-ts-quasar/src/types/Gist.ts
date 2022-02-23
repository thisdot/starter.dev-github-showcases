export default interface Gist {
  id: string;
  html_url: string;
  public: boolean;
  description: string;
  files: Record<
    string,
    {
      filename: string;
      type: string;
      language: string;
      raw_url: string;
      size: number;
    }
  >;
}
