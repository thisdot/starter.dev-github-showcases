import { Organization } from './types';
import Image from 'next/image';
import {
  UsersIcon,
  StarIcon,
  OfficeBuildingIcon,
  LocationMarkerIcon,
  LinkIcon,
} from '@heroicons/react/outline';
import { TwitterIcon } from '@components/Icons';
import OrgList from './OrgList';
import styles from './UserProfile.module.css';

export interface UserProfileViewProps {
  avatarUrl: any;
  bio?: string | null;
  company?: string | null;
  location?: string | null;
  username: string;
  name?: string | null;
  twitterUsername?: string | null;
  websiteUrl?: string | null;
  followers: number;
  following: number;
  starredRepos: number;
  organizations: Organization[];
}

function UserProfileView({
  avatarUrl,
  bio,
  company,
  location,
  username,
  name,
  twitterUsername,
  websiteUrl,
  followers,
  following,
  starredRepos,
  organizations,
}: UserProfileViewProps) {
  return (
    <div>
      <Image
        src={avatarUrl}
        alt="Avatar"
        width={260}
        height={260}
        className={styles.avatar}
      />
      <h1 className="mt-2">
        <div className={styles.name}>{name}</div>
        <div className={styles.username}>{username}</div>
      </h1>
      <div className={styles.bio}>{bio}</div>
      <div className={styles.socials}>
        <UsersIcon className={styles.icon} />
        <span className="inline-block">
          <span className={styles.count}>{followers}</span> followers
        </span>
        <span className="mx-1">·</span>
        <span className="inline-block">
          <span className={styles.count}>{following}</span> following
        </span>
        <span className="mx-1">·</span>
        <StarIcon className={styles.icon} />
        <span className="inline-block">
          <span className={styles.count}>{starredRepos}</span>{' '}
        </span>
      </div>
      <div className={styles.fields}>
        {company && (
          <div>
            <OfficeBuildingIcon className={styles.icon} />
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
            <a
              className={styles.link}
              href={websiteUrl}
              target="_blank"
              rel="noreferrer"
            >
              {websiteUrl}
            </a>
          </div>
        )}
        {twitterUsername && (
          <div>
            <TwitterIcon className={styles.icon} />
            <a
              className={styles.link}
              href={`https:/twitter.com/${twitterUsername}`}
              target="_blank"
              rel="noreferrer"
            >
              @{twitterUsername}
            </a>
          </div>
        )}
      </div>
      {organizations.length > 0 && <OrgList organizations={organizations} />}
    </div>
  );
}

export default UserProfileView;
