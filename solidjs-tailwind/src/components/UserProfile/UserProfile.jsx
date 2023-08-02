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
import styles from './UserProfile.module.css';

const UserProfile = (userProfileProps) => {
  return (
    <div>
      <img
        src={userProfileProps.avatarUrl}
        alt="Avatar"
        width={260}
        height={260}
        class={styles.avatar}
      />
      <h1 class="mt-2">
        <div class={styles.name}>{userProfileProps.name}</div>
        <div class={styles.username}>{userProfileProps.username}</div>
      </h1>
      <div class={styles.bio}>{userProfileProps.bio}</div>
      <div class={styles.socials}>
        <Icon path={users} class={styles.icon} />
        <span class="inline-block">
          <span class={styles.count}>
            {userProfileProps.followers.totalCount}
          </span>{' '}
          followers
        </span>
        <span class="mx-1">·</span>
        <span class="inline-block">
          <span class={styles.count}>
            {userProfileProps.following.totalCount}
          </span>{' '}
          following
        </span>
        <span class="mx-1">·</span>
        <Icon path={star} class={styles.icon} />
        <span class="inline-block">
          <span class={styles.count}>
            {userProfileProps.starredRepositories.totalCount}
          </span>{' '}
        </span>
      </div>
      <div class={styles.fields}>
        {userProfileProps.company && (
          <div>
            <Icon path={buildingOffice} class={styles.icon} />
            {userProfileProps.company}
          </div>
        )}
        {userProfileProps.location && (
          <div>
            <Icon path={mapPin} class={styles.icon} />
            {userProfileProps.location}
          </div>
        )}
        {userProfileProps.websiteUrl && (
          <div>
            <Icon path={link} class={styles.icon} />
            <a
              class={styles.link}
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
            <TwitterIcon class={styles.icon} />
            <a
              class={styles.link}
              href={`https:/twitter.com/${userProfileProps.twitterUsername}`}
              target="_blank"
              rel="noreferrer"
            >
              @{userProfileProps.twitterUsername}
            </a>
          </div>
        )}
      </div>
      {userProfileProps?.organizations?.nodes.length > 0 && (
        <OrgList organizations={userProfileProps.organizations.nodes} />
      )}
    </div>
  );
};

export default UserProfile;
