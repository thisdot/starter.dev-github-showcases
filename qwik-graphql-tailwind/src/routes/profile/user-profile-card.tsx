import { component$ } from '@builder.io/qwik';
import { BuildingIcon, LinkIcon, LocationMarkerIcon, StarIcon, TwitterIcon, UsersIcon } from '../../components/icons';
import { OrgList } from '../../components/org-list/org-list';
import { Follow, Nodes } from '../../utils/types';
import * as styles from './user-profile.classNames';

export interface UserProfileCardProps {
  avatarUrl: any;
  bio?: string | null;
  company?: string | null;
  location?: string | null;
  login: string;
  name?: string | null;
  twitterUsername?: string | null;
  websiteUrl?: string | null;
  followers: Follow;
  following: Follow;
  starredRepositories: Follow;
  organizations: Nodes;
}
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
  }: UserProfileCardProps) => {
    return (
      <div>
        <img src={avatarUrl} alt="Avatar" width={260} height={260} className={styles.avatar} />
        <h1 className="mt-2">
          <div className={styles.name}>{name}</div>
          <div className={styles.username}>{login}</div>
        </h1>
        {bio && <div className={styles.bio} dangerouslySetInnerHTML={bio} />}
        <div className={styles.socials}>
          <UsersIcon className={styles.icon} />
          <span className="inline-block">
            <span className={styles.count}>{followers.totalCount}</span> followers
          </span>
          <span className="mx-1">·</span>
          <span className="inline-block">
            <span className={styles.count}>{following.totalCount}</span> following
          </span>
          <span className="mx-1">·</span>
          <StarIcon className={styles.icon} />
          <span className="inline-block">
            <span className={styles.count}>{starredRepositories.totalCount}</span>{' '}
          </span>
        </div>
        <div className={styles.fields}>
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
              <a className={styles.link} href={`https://${websiteUrl}`} target="_blank" rel="noreferrer">
                {websiteUrl}
              </a>
            </div>
          )}
          {twitterUsername && (
            <div>
              <TwitterIcon className={styles.icon} />
              <a
                className={styles.link}
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
