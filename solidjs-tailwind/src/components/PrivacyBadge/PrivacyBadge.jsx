import cn from 'classnames';
import * as styles from './PrivacyBadge.classNames';

const PrivacyBadge = (props) => {
  return (
    <span class={cn(styles.tag, props.className)}>
      {props.isPrivate ? 'Private' : 'Public'}
    </span>
  );
};

export default PrivacyBadge;
