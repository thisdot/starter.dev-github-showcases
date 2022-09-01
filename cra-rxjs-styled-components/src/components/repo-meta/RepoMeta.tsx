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
  const socialIcons = [
    {
      count: stargazerCount,
      icon: <StarLogo />,
    },
    {
      count: forkCount,
      icon: <BranchLogo />,
    },
  ].filter((o) => o.count > 0);

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
      {socialIcons.length > 0 && (
        <SocialWrapper>
          {socialIcons.map(({ count, icon }, i) => (
            <MetaIcon key={i} text={count} children={icon} />
          ))}
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
