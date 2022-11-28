import { splitProps } from 'solid-js';

const PrivacyBadge = (props) => {
  const [local] = splitProps(props, ['visibility']);
  return (
    <span class="py-0.5 px-2 text-xs rounded-xl text-gray-600 border border-gray-300 font-medium capitalize">
      {local.visibility.toLowerCase()}
    </span>
  );
};

export default PrivacyBadge;
