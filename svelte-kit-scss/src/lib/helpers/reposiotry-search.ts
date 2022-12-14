export type RepositoryPageSearchQueryParameters = {
  language?: string;
  q?: string;
  sort?: string;
  type?: string;
};

export const extractRepositoryPageSearchQueryParameters = (
  url: URL
): RepositoryPageSearchQueryParameters => {
  const pageQuery = Object.fromEntries(url.searchParams);
  const params = (({ language, q, sort, type }) => ({ language, q, sort, type }))(pageQuery);
  return params;
};
