import { component$ } from '@builder.io/qwik';
import { BuildingIcon, LinkIcon, LocationMarkerIcon, StarIcon, TwitterIcon, UsersIcon } from '../icons';
import { OrgList } from '../org-list/org-list';
import { User } from '../../utils/types';
import * as styles from './user-profile-card.classNames';

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
        <img src={avatarUrl} alt="Avatar" width={260} height={260} class={styles.avatar} />
        <h1 class="mt-2">
          <div class={styles.name}>{name}</div>
          <div class={styles.username}>{login}</div>
        </h1>
        {bio && <div class={styles.bio} dangerouslySetInnerHTML={bio} />}
        <div class={styles.socials}>
          <UsersIcon className={styles.icon} />
          <span class="inline-block">
            <span class={styles.count}>{followers.totalCount}</span> followers
          </span>
          <span class="mx-1">·</span>
          <span class="inline-block">
            <span class={styles.count}>{following.totalCount}</span> following
          </span>
          <span class="mx-1">·</span>
          <StarIcon className={styles.icon} />
          <span class="inline-block">
            <span class={styles.count}>{starredRepositories.totalCount}</span>{' '}
          </span>
        </div>
        <div class={styles.fields}>
          {company && (
            <div>
              <BuildingIcon className={styles.icon} />
              {company}
            </div>
          )}
          {location && (
            <div>
              <LocationMarkerIcon className={styles.icon} />
              {location}
            </div>
          )}
          {websiteUrl && (
            <div>
              <LinkIcon className={styles.icon} />
              <a class={styles.link} href={`https://${websiteUrl}`} target="_blank" rel="noreferrer">
                {websiteUrl}
              </a>
            </div>
          )}
          {twitterUsername && (
            <div>
              <TwitterIcon className={styles.icon} />
              <a class={styles.link} href={`https://twitter.com/${twitterUsername}`} target="_blank" rel="noreferrer">
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
