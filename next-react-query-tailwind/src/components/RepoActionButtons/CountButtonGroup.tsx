import type { ReactNode } from 'react';
import styles from './RepoActionButtons.module.css';

interface CountButtonGroupProps {
  children: ReactNode;
  count?: number;
}

const formatCountString = (count: number) => {
  let countText = `${count}`;
  if (count && count > 1000) {
    let digits = countText.split('');
    digits.splice(digits.length - 3, 3);
    countText = `${digits.join('')}k`;
  }
  return countText;
};

function CountButtonGroup({ children, count = 0 }: CountButtonGroupProps) {
  let countText = formatCountString(count);
  let buttonText = children
    ?.toString()
    .replace('[object Object],', '')
    .toLowerCase();
  return (
    <span className={styles.btnGroup}>
      <button type="button" className={styles.btnMain}>
        {children}
      </button>
      <button
        data-testid={`repo ${buttonText} count`}
        type="button"
        className={styles.btnSide}
      >
        {countText}
      </button>
    </span>
  );
}

export default CountButtonGroup;
