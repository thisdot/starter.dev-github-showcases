import {
  users,
  star,
  buildingOffice,
  mapPin,
  link,
} from 'solid-heroicons/outline';
import { Icon } from 'solid-heroicons';
import { TwitterIcon } from '../Icons';
import OrgList from './OrgList';

const UserProfile = (userProfileProps) => {
  return (
    <div>
      <img
        src={userProfileProps.avatarUrl}
        alt="Avatar"
        width={260}
        height={260}
        class="rounded-full shadow z-30"
      />
      <h1 class="mt-2">
        <div class="text-2xl text-gray-800 font-bold leading-tight">
          {userProfileProps.name}
        </div>
        <div class="text-xl text-gray-500 font-light">
          {userProfileProps.username}
        </div>
      </h1>
      <div class="text-gray-800 mt-4">{userProfileProps.bio}</div>
      <div class="text-sm text-gray-600 my-4">
        <Icon path={users} class="w-4 h-4 mb-0.5 mr-1 inline" />
        <span class="inline-block">
          <span class="font-medium text-gray-900">
            {userProfileProps.followers}
          </span>{' '}
          followers
        </span>
        <span class="mx-1">·</span>
        <span class="inline-block">
          <span class="font-medium text-gray-900">
            {userProfileProps.following}
          </span>{' '}
          following
        </span>
        <span class="mx-1">·</span>
        <Icon path={star} class="w-4 h-4 mb-0.5 mr-1 inline" />
        <span class="inline-block">
          <span class="font-medium text-gray-900">
            {userProfileProps.starredRepos}
          </span>{' '}
        </span>
      </div>
      <div class="text-sm text-gray-800 space-y-1">
        {userProfileProps.company && (
          <div>
            <Icon path={buildingOffice} class="w-4 h-4 mb-0.5 mr-1 inline" />
            {userProfileProps.company}
          </div>
        )}
        {userProfileProps.location && (
          <div>
            <Icon path={mapPin} class="w-4 h-4 mb-0.5 mr-1 inline" />
            {userProfileProps.location}
          </div>
        )}
        {userProfileProps.websiteUrl && (
          <div>
            <Icon path={link} class="w-4 h-4 mb-0.5 mr-1 inline" />
            <a
              class="hover:text-blue-600 hover:underline"
              href={userProfileProps.websiteUrl}
              target="_blank"
              rel="noreferrer"
            >
              {userProfileProps.websiteUrl}
            </a>
          </div>
        )}
        {userProfileProps.twitterUsername && (
          <div>
            <TwitterIcon class="w-4 h-4 mb-0.5 mr-1 inline" />
            <a
              class="hover:text-blue-600 hover:underline"
              href={`https:/twitter.com/${userProfileProps.twitterUsername}`}
              target="_blank"
              rel="noreferrer"
            >
              @{userProfileProps.twitterUsername}
            </a>
          </div>
        )}
      </div>
      {userProfileProps.organizations.length > 0 && (
        <OrgList organizations={userProfileProps.organizations} />
      )}
    </div>
  );
};

export default UserProfile;
