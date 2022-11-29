import cn from 'classnames';

const PrivacyBadge = (props) => {
  return <span class={cn('py-0.5 px-2 text-xs rounded-xl text-gray-600 border border-gray-300 font-medium', props.class)}>{props.isPrivate ? 'Private' : 'Public'}</span>;
};

export default PrivacyBadge;
