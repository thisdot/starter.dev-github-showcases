import { formatDistance } from 'date-fns';
import { getColourForLanguage } from '../../helpers/colours';
import { BranchLogo } from '../misc/BranchLogo';
import { StarLogo } from '../misc/StarLogo';
import {
  LanguageColor,
  Metadata,
  SocialCount,
  TextSpan,
  SocialWrapper,
} from './RepoMeta.styles';
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
            <SocialCount>
              <StarLogo />
              <TextSpan>{stargazerCount}</TextSpan>
            </SocialCount>
          )}
          {forkCount > 0 && (
            <SocialCount>
              <BranchLogo />
              <TextSpan>{forkCount}</TextSpan>
            </SocialCount>
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
