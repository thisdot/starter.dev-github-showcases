import { NavLink } from '@solidjs/router';
import { PrivacyBadge } from '../PrivacyBadge';
import { RepoMeta } from '../RepoMeta';

const RepoCard = (props) => {
  return (
    <div class={props.styles.item}>
      <h3 class="mb-2">
        <NavLink
          href={`/${props.owner}/${props.name}`}
          class={props.styles.headingLink}
        >
          {props.name}
        </NavLink>
        <PrivacyBadge isPrivate={props.isPrivate} class="relative bottom-0.5" />
      </h3>
      <div class={props.styles.description}>{props.description}</div>
      <RepoMeta
        language={props.language}
        languageColor={props.languageColor}
        forkCount={props.forkCount}
        stargazerCount={props.stargazerCount}
        updatedAt={props.updatedAt}
      />
    </div>
  );
};

export default RepoCard;
