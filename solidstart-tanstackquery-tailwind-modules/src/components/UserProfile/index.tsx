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
import { Show } from 'solid-js';
import { Profile } from '~/types/user-profile-type';

const UserProfile = (props: Profile) => {
  return (
    <div>
      <img
        src={props.avatarUrl}
        alt="Avatar"
        width={260}
        height={260}
        class={styles.avatar}
      />
      <h1 class="mt-2">
        <div class={styles.name}>{props.name}</div>
        <div class={styles.username}>{props.username}</div>
      </h1>
      <div class={styles.bio}>{props.bio}</div>
      <div class={styles.socials}>
        <Icon path={users} class={styles.icon} />
        <span class="inline-block">
          <span class={styles.count}>{props.followers.totalCount}</span>{' '}
          followers
        </span>
        <span class="mx-1">·</span>
        <span class="inline-block">
          <span class={styles.count}>{props.following.totalCount}</span>{' '}
          following
        </span>
        <span class="mx-1">·</span>
        <Icon path={star} class={styles.icon} />
        <span class="inline-block">
          <span class={styles.count}>
            {props.starredRepositories.totalCount}
          </span>{' '}
        </span>
      </div>
      <div class={styles.fields}>
        <Show when={props.company}>
          <div>
            <Icon path={buildingOffice} class={styles.icon} />
            {props.company}
          </div>
        </Show>
        <Show when={props.location}>
          <div>
            <Icon path={mapPin} class={styles.icon} />
            {props.location}
          </div>
        </Show>
        <Show when={props.websiteUrl}>
          <div>
            <Icon path={link} class={styles.icon} />
            <a
              class={styles.link}
              href={props.websiteUrl}
              target="_blank"
              rel="noreferrer"
            >
              {props.websiteUrl}
            </a>
          </div>
        </Show>
        <Show when={props.twitterUsername}>
          <div>
            <TwitterIcon class={styles.icon} />
            <a
              class={styles.link}
              href={`https:/twitter.com/${props.twitterUsername}`}
              target="_blank"
              rel="noreferrer"
            >
              @{props.twitterUsername}
            </a>
          </div>
        </Show>
      </div>
      <Show when={props.organizations.nodes.length > 0}>
        <OrgList organizations={props.organizations.nodes} />
      </Show>
    </div>
  );
};

export default UserProfile;
