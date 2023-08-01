/** Collection page */
export type GithubCollectionPage<T> = {
  total_count: number;
  incomplete_results: boolean;
  items: T[];
};
