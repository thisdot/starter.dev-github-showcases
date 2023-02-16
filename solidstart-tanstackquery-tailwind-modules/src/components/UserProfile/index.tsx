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
import { Show, splitProps } from 'solid-js';
import { UserProfileProps } from '~/types/user-profile-type';

const UserProfile = (props: UserProfileProps) => {
  const [local] = splitProps(props, [
    'avatarUrl',
    'name',
    'username',
    'bio',
    'followers',
    'following',
    'starredRepositories',
    'company',
    'location',
    'websiteUrl',
    'twitterUsername',
    'organizations',
  ]);

  return (
    <div>
      <img
        src={local.avatarUrl}
        alt="Avatar"
        width={260}
        height={260}
        class={styles.avatar}
      />
      <h1 class="mt-2">
        <div class={styles.name}>{local.name}</div>
        <div class={styles.username}>{local.username}</div>
      </h1>
      <div class={styles.bio}>{local.bio}</div>
      <div class={styles.socials}>
        <Icon path={users} class={styles.icon} />
        <span class="inline-block">
          <span class={styles.count}>{local.followers.totalCount}</span>{' '}
          followers
        </span>
        <span class="mx-1">·</span>
        <span class="inline-block">
          <span class={styles.count}>{local.following.totalCount}</span>{' '}
          following
        </span>
        <span class="mx-1">·</span>
        <Icon path={star} class={styles.icon} />
        <span class="inline-block">
          <span class={styles.count}>
            {local.starredRepositories.totalCount}
          </span>{' '}
        </span>
      </div>
      <div class={styles.fields}>
        <Show when={local.company}>
          <div>
            <Icon path={buildingOffice} class={styles.icon} />
            {local.company}
          </div>
        </Show>
        <Show when={local.location}>
          <div>
            <Icon path={mapPin} class={styles.icon} />
            {local.location}
          </div>
        </Show>
        <Show when={local.websiteUrl}>
          <div>
            <Icon path={link} class={styles.icon} />
            <a
              class={styles.link}
              href={local.websiteUrl}
              target="_blank"
              rel="noreferrer"
            >
              {local.websiteUrl}
            </a>
          </div>
        </Show>
        <Show when={local.twitterUsername}>
          <div>
            <TwitterIcon class={styles.icon} />
            <a
              class={styles.link}
              href={`https:/twitter.com/${local.twitterUsername}`}
              target="_blank"
              rel="noreferrer"
            >
              @{local.twitterUsername}
            </a>
          </div>
        </Show>
      </div>
      <Show when={local.organizations.nodes.length > 0}>
        <OrgList organizations={local.organizations.nodes} />
      </Show>
    </div>
  );
};

export default UserProfile;
