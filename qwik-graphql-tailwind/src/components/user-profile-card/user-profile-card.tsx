import { component$ } from '@builder.io/qwik';
import { BuildingIcon, LinkIcon, LocationMarkerIcon, StarIcon, TwitterIcon, UsersIcon } from '../icons';
import { OrgList } from '../org-list/org-list';
import { User } from '../../utils/types';

export const UserProfileCard = component$(
  ({
    avatarUrl,
    bio,
    company,
    location,
    login,
    name,
    twitterUsername,
    websiteUrl,
    followers,
    following,
    starredRepositories,
    organizations,
  }: User) => {
    return (
      <div>
        <img src={avatarUrl} alt="Avatar" width={260} height={260} class="rounded-full shadow z-30" />
        <h1 class="mt-2">
          <div class="text-2xl text-gray-800 font-bold leading-tight">{name}</div>
          <div class="text-xl text-gray-500 font-light">{login}</div>
        </h1>
        {bio && <div class="text-gray-800 mt-4 mb-3" dangerouslySetInnerHTML={bio} />}
        <div class="text-sm text-gray-600 my-4">
          <UsersIcon className="w-4 h-4 mb-0.5 mr-1 inline-block" />
          <span class="inline-block">
            <span class="font-medium text-gray-900">{followers.totalCount}</span> followers
          </span>
          <span class="mx-1">·</span>
          <span class="inline-block">
            <span class="font-medium text-gray-900">{following.totalCount}</span> following
          </span>
          <span class="mx-1">·</span>
          <StarIcon className="w-4 h-4 mb-0.5 mr-1 inline-block" />
          <span class="inline-block">
            <span class="font-medium text-gray-900">{starredRepositories.totalCount}</span>{' '}
          </span>
        </div>
        <div class="text-sm text-gray-800 space-y-1">
          {company && (
            <div>
              <BuildingIcon className="w-4 h-4 mb-0.5 mr-1 inline-block" />
              {company}
            </div>
          )}
          {location && (
            <div>
              <LocationMarkerIcon className="w-4 h-4 mb-0.5 mr-1 inline-block" />
              {location}
            </div>
          )}
          {websiteUrl && (
            <div>
              <LinkIcon className="w-4 h-4 mb-0.5 mr-1 inline-block" />
              <a
                class="hover:text-blue-600 hover:underline"
                href={`https://${websiteUrl}`}
                target="_blank"
                rel="noreferrer"
              >
                {websiteUrl}
              </a>
            </div>
          )}
          {twitterUsername && (
            <div>
              <TwitterIcon className="w-4 h-4 mb-0.5 mr-1 inline-block" />
              <a
                class="hover:text-blue-600 hover:underline"
                href={`https://twitter.com/${twitterUsername}`}
                target="_blank"
                rel="noreferrer"
              >
                @{twitterUsername}
              </a>
            </div>
          )}
        </div>
        {organizations.nodes.length > 0 && <OrgList organizations={organizations.nodes} />}
      </div>
    );
  }
);
