import { $, component$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';

export interface PaginationProps {
  tab?: string;
  pageInfo?: any;
  owner: string;
}

export const Pagination = component$(({ tab, pageInfo, owner }: PaginationProps) => {
  const nav = useNavigate();
  if (!pageInfo) {
    return null;
  }

  const prevUrl = `/${owner}?before=${pageInfo.startCursor}${tab ? `&tab=${tab}` : ''}`;
  const nextUrl = `/${owner}?after=${pageInfo.endCursor}${tab ? `&tab=${tab}` : ''}`;

  const handlePreviousClick$ = $(() => {
    nav.path = prevUrl;
  });

  const handleNextClick$ = $(() => {
    nav.path = nextUrl;
  });

  return (
    <div class="flex items-center justify-center mt-4">
      <span class="relative z-0 inline-flex shadow-sm rounded-md">
        <button
          type="button"
          disabled={!pageInfo.hasPreviousPage || !pageInfo.startCursor}
          onClick$={handlePreviousClick$}
          class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-gray-100 text-sm font-semibold text-blue-500 hover:bg-blue-500 hover:border-blue-500  hover:text-white focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 disabled:opacity-50 disabled:cursor-default disabled:hover:bg-gray-100 disabled:hover:text-blue-500 disabled:hover:border-gray-200 transition-colors duration-150 ease-in-out rounded-l-lg"
        >
          Previous
        </button>
        <button
          type="button"
          onClick$={handleNextClick$}
          disabled={!pageInfo.hasNextPage || !pageInfo.endCursor}
          class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-gray-100 text-sm font-semibold text-blue-500 hover:bg-blue-500 hover:border-blue-500  hover:text-white focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 disabled:opacity-50 disabled:cursor-default disabled:hover:bg-gray-100 disabled:hover:text-blue-500 disabled:hover:border-gray-200 transition-colors duration-150 ease-in-out rounded-r-lg"
        >
          Next
        </button>
      </span>
    </div>
  );
});
