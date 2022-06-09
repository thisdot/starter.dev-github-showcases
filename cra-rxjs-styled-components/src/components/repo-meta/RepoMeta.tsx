import { formatDistance } from 'date-fns';
import { getColourForLanguage } from '../../helpers/colours';
import { BranchLogo } from '../misc/BranchLogo';
import { StarLogo } from '../misc/StarLogo';
import MetaIcon from './MetaIcon';
import { LanguageColor, Metadata, SocialWrapper } from './RepoMeta.styles';

interface RepoMetaProps {
  language?: string | null;
  stargazerCount: number;
  forkCount: number;
  updatedAt: Date;
}

function RepoMeta({
  language,
  stargazerCount,
  forkCount,
  updatedAt,
}: RepoMetaProps) {
  const socialIcons = [];
  if (stargazerCount > 0) {
    socialIcons.push(
      <MetaIcon text={stargazerCount} children={<StarLogo />} />
    );
  }
  if (forkCount > 0) {
    socialIcons.push(<MetaIcon text={forkCount} children={<BranchLogo />} />);
  }

  return (
    <Metadata>
      {language && (
        <div>
          <LanguageColor
            style={{
              backgroundColor: getColourForLanguage(language) || '#ccc',
            }}
          />
          {language}
        </div>
      )}
      {socialIcons.length > 0 && <SocialWrapper>{socialIcons}</SocialWrapper>}
      <div>
        Updated{' '}
        {formatDistance(new Date(updatedAt), Date.now(), {
          addSuffix: true,
        })}
      </div>
    </Metadata>
  );
}

export default RepoMeta;
