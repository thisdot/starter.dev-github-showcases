import type { ReactNode } from 'react';
import styles from './RepoActionButtons.module.css';

interface CountButtonGroupProps {
  children: ReactNode;
  count?: number;
}
function CountButtonGroup({ children, count }: CountButtonGroupProps) {
  return (
    <span className={styles.btnGroup}>
      <button type="button" className={styles.btnMain}>
        {children}
      </button>
      <button type="button" className={styles.btnSide}>
        {count}
      </button>
    </span>
  );
}

export default CountButtonGroup;
