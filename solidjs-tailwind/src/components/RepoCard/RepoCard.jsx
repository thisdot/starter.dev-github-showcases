import { Link } from '@solidjs/router';
import { Show, splitProps } from 'solid-js';
import { OcStar2 } from 'solid-icons/oc';
import RepoMeta from '../RepoMeta/RepoMeta';
import { PrivacyBadge } from '../PrivacyBadge';

const RepoCard = (props) => {
  const [local] = splitProps(props, [
    'name',
    'description',
    'primaryLanguage',
    'stargazerCount',
    'owner',
    'forkCount',
    'isProfilePage',
    'updatedAt',
    'visibility',
  ]);

  const repoNameWithOwnerLink = () =>
    local.owner?.login ? `/${local.owner.login}/${local.name || ''}` : '';

  const repoNameWithOwner = () =>
    `${!local.isProfilePage ? `${local.owner?.login || ''}/` : ''}${
      local.name || ''
    }`;

  return (
    <div data-testid='repo-item' class="px-4 py-4 border-b border-gray-200 first-of-type:border-t flex justify-between flex-wrap md:flex-nowrap gap-x-4">
      <div class="col-span-12 md:col-span-7 text-left">
        <h3 class="mb-4">
          <Link href={repoNameWithOwnerLink()}>
            <span class="text-xl text-blue-600 font-semibold hover:underline mr-3">
              {repoNameWithOwner()}
            </span>
          </Link>
          <PrivacyBadge visibility={local.visibility.toLowerCase()} />
        </h3>
        <Show when={local.description}>
          <div class="text-gray-600 text-sm max-w-prose">
            {local.description}
          </div>
        </Show>
        <RepoMeta
          language={local.primaryLanguage?.name}
          languageColor={local.primaryLanguage?.color}
          forkCount={local.forkCount}
          stargazerCount={local.stargazerCount}
          updatedAt={local.updatedAt}
        />
      </div>
      {local.isProfilePage ? (
        <div class="col-span-12 md:col-span-5 flex items-start md:justify-end mt-4 lg:mt-0">
          <button class="inline-flex gap-2 items-center px-3 py-1 rounded-md bg-gray-100 bg-opacity-75 border border-gray-300 text-sm font-medium text-gray-800 hover:bg-gray-200 hover:bg-opacity-50">
            <span class="-translate-x-1 -translate-y-[0.45rem]">
              <OcStar2 size={2} />
            </span>
            <span class="ml-2">Star</span>
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default RepoCard;
