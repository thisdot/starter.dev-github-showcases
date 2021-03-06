import type { ComponentType } from 'react';
import * as styles from './IssuesEmpty.classNames';

interface IssuesEmptyProps {
  Icon?: ComponentType<{ className: string }>;
}

function IssuesEmpty({ Icon }: IssuesEmptyProps) {
  return (
    <div className={styles.container} data-testid="issues-empty">
      {Icon && <Icon className={styles.icon} />}
      <h3 className={styles.heading}>No results matched your search.</h3>
    </div>
  );
}

export default IssuesEmpty;
