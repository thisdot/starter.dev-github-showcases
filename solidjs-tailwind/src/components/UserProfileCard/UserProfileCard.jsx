import * as styles from './user-profile-card.classNames';

const UserProfileCard = (props) => {
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
        <div class={styles.username}>{props.login}</div>
      </h1>
      {props.bio && <div class={styles.bio} InnerHTML={props.bio} />}
      <div class={styles.socials}>
        {/* <UsersIcon class={styles.icon} /> */}
        <span class="inline-block">
          <span class={styles.count}>{props.followers.totalCount}</span> followers
        </span>
        <span class="mx-1">·</span>
        <span class="inline-block">
          <span class={styles.count}>{props.following.totalCount}</span> following
        </span>
        <span class="mx-1">·</span>
        {/* <StarIcon class={styles.icon} /> */}
        <span class="inline-block">
          <span class={styles.count}>{props.starredRepositories.totalCount}</span>{' '}
        </span>
      </div>
      <div class={styles.fields}>
        {props.company && (
          <div>
            {/* <BuildingIcon class={styles.icon} /> */}
            {props.company}
          </div>
        )}
        {location && (
          <div>
            {/* <LocationMarkerIcon class={styles.icon} /> */}
            {location}
          </div>
        )}
        {props.websiteUrl && (
          <div>
            {/* <LinkIcon class={styles.icon} /> */}
            <a
              class={styles.link}
              href={`https://${props.websiteUrl}`}
              target="_blank"
              rel="noreferrer"
            >
              {props.websiteUrl}
            </a>
          </div>
        )}
        {props.twitterUsername && (
          <div>
            {/* <TwitterIcon class={styles.icon} /> */}
            <a
              class={styles.link}
              href={`https://twitter.com/${props.twitterUsername}`}
              target="_blank"
              rel="noreferrer"
            >
              @{props.twitterUsername}
            </a>
          </div>
        )}
      </div>
      {props.organizations.nodes.length > 0 && (
        <span>Here will be the orgList</span>
        // <OrgList organizations={props.organizations.nodes} />
      )}
    </div>
  );
};

export default UserProfileCard;
