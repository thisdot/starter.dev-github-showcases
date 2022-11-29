import { Link } from '@solidjs/router';
import { Show, splitProps } from 'solid-js';
import RepoMeta from '../RepoMeta/RepoMeta';
import { PrivacyBadge } from '../PrivacyBadge';

const RepoCard = (props) => {
  const [local] = splitProps(props, [
    'name',
    'description',
    'language',
    'stargazerCount',
    'owner',
    'updatedAt',
    'forkCount',
    'isPrivate',
    'languageColor',
  ]);

  return (
    <div class="px-4 py-4 border-b border-gray-200 first-of-type:border-t flex justify-between flex-wrap md:flex-nowrap gap-x-4">
      <div class="col-span-12 md:col-span-7 text-left">
        <h3 class="mb-4">
          <Link href={`/${local.owner}/${local.name}`}>
            <span class="text-xl text-blue-600 font-semibold hover:underline mr-3">
              {local.name}
            </span>
          </Link>
          <PrivacyBadge
            isPrivate={local.isPrivate}
            class="relative bottom-0.5"
          />
        </h3>
        <Show when={local.description}>
          <div class="text-gray-600 text-sm max-w-prose">
            {local.description}
          </div>
        </Show>
        <RepoMeta
          language={local.language}
          languageColor={local.languageColor}
          forkCount={local.forkCount}
          stargazerCount={local.stargazerCount}
          updatedAt={local.updatedAt}
        />
      </div>
    </div>
  );
};

export default RepoCard;
