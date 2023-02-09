import { JSXElement, children, mergeProps } from 'solid-js';
import styles from './RepoActionButtons.module.css';

const formatCountString = (count: number) => {
  let countText = `${count}`;
  if (count && count > 1000) {
    let digits = countText.split('');
    digits.splice(digits.length - 3, 3);
    countText = `${digits.join('')}k`;
  }
  return countText;
};

type CountButtonGroupProps = {
  count: number;
  children: JSXElement;
};

function CountButtonGroup(props: CountButtonGroupProps) {
  const merged = mergeProps({ count: 0 }, props);
  const c = children(() => props.children);
  let buttonText = c()
    ?.toString()
    .replace('[object Object],', '')
    .toLowerCase();
  return (
    <span class={styles.btnGroup}>
      <button type="button" class={styles.btnMain}>
        {c()}
      </button>
      <button
        data-testid={`repo ${buttonText} count`}
        type="button"
        class={styles.btnSide}
      >
        {formatCountString(merged.count)}
      </button>
    </span>
  );
}

export default CountButtonGroup;
