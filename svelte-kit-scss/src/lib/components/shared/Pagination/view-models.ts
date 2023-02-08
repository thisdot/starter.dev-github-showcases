export type PaginationViewModel = {
  previousPageHref?: string;
  nextPageHref?: string;
  pagesHrefs?: Record<number, string>;
  currentPage?: number;
};
