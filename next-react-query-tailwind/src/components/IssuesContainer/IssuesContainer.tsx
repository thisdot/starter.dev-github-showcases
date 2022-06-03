import type { ReactNode } from 'react';
import cn from 'classnames';
import { XIcon } from '@heroicons/react/outline';
import styles from './IssuesContainer.module.css';

interface IssuesContainerProps {
  filtersEl: JSX.Element;
  children: ReactNode;
  clearFilters?: () => void;
  hasActiveFilters?: boolean;
}

function IssuesContainer({
  filtersEl,
  children,
  hasActiveFilters = false,
  clearFilters,
}: IssuesContainerProps) {
  return (
    <>
      {hasActiveFilters && (
        <button
          className={cn(styles.clearButton, 'group')}
          onClick={clearFilters}
        >
          <span
            className={cn(
              styles.clearButtonIconContainer,
              'group-hover:bg-blue-500'
            )}
          >
            <XIcon className={styles.clearButtonIcon} />
          </span>
          <span
            className={cn(styles.clearButtonText, 'group-hover:text-blue-500')}
          >
            Clear current search query, filters, and sorts
          </span>
        </button>
      )}
      <div className={styles.container}>
        {filtersEl}
        {children}
      </div>
    </>
  );
}

export default IssuesContainer;
