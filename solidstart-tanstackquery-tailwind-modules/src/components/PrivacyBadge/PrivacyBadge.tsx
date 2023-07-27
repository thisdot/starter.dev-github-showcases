import { splitProps } from 'solid-js';
import { RepoCardProps } from '../RepoCard/RepoCard';

const PrivacyBadge = (props: Pick<RepoCardProps, 'visibility'>) => {
  const [local] = splitProps(props, ['visibility']);
  return (
    <span class="py-0.5 px-2 text-xs rounded-xl text-gray-600 border border-gray-300 font-medium capitalize">
      {local.visibility}
    </span>
  );
};

export default PrivacyBadge;
