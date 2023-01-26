import { children } from 'solid-js';
import styles from './RepoActionButtons.module.css';

const formatCountString = (props) => {
  const count = () => props || 0;
  let countText = `${count()}`;
  if (count() && count() > 1000) {
    let digits = countText.split('');
    digits.splice(digits.length - 3, 3);
    countText = `${digits.join('')}k`;
  }
  return countText;
};

function CountButtonGroup(props) {
  const count = () => props.count || 0;
  let countText = formatCountString(count());
  const c = children(() => props.children);
  let buttonText = c().toString().replace('[object Object],', '').toLowerCase();
  return (
    <span class={styles.btnGroup}>
      <button type="button" class={styles.btnMain}>
        {props.children}
      </button>
      <button
        data-testid={`repo ${buttonText} count`}
        type="button"
        class={styles.btnSide}
      >
        {countText}
      </button>
    </span>
  );
}

export default CountButtonGroup;
