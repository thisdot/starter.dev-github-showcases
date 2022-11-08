import * as styles from './privacy-badge.classNames';
import cn from 'classnames';

const PrivacyBadge = (props) => {
  return (
    <span class={cn(styles.tag, props.className)}>
      {props.isPrivate ? 'Private' : 'Public'}
    </span>
  );
};

export default PrivacyBadge;
