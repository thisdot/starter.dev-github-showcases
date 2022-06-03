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
      {(stargazerCount > 0 || forkCount > 0) && (
        <SocialWrapper>
          {stargazerCount > 0 && (
            <MetaIcon text={stargazerCount} children={<StarLogo />} />
          )}
          {forkCount > 0 && (
            <MetaIcon text={forkCount} children={<BranchLogo />} />
          )}
        </SocialWrapper>
      )}
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
