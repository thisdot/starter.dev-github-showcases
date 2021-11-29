import type { PageInfo } from '@lib/github';
import Link from 'next/link';

interface PaginationProps {
  pageInfo?: PageInfo;
  owner: string;
}

function Pagination({ pageInfo, owner }: PaginationProps) {
  if (!pageInfo) {
    return null;
  }

  return (
    <div className="flex items-center justify-center">
      {pageInfo.hasPreviousPage && pageInfo.startCursor && (
        <Link href={`/${owner}?before=${pageInfo.startCursor}`}>
          <a className="">Previous</a>
        </Link>
      )}
      {pageInfo.hasNextPage && pageInfo.endCursor && (
        <Link href={`/${owner}?after=${pageInfo.endCursor}`}>
          <a className="">Next</a>
        </Link>
      )}
    </div>
  );
}

export default Pagination;
