import React from 'react';
import { Text } from 'react-native';
import {
  LanguageColor,
  Language,
  SocialWrapper,
  MetaIcon,
  MetaData,
  DateWrapper,
} from './RepoCard.styles';
import { getColorForLanguage } from '../../utils/language-colors';
import { formatDistance } from 'date-fns';
import { StarLogo } from '../Icons/StarLogo';
import { BranchLogo } from '../Icons/BranchLogo';
import { colors } from '../../utils/style-variables';

interface RepoMetaProps {
  language?: string;
  stargazerCount: number;
  forkCount: number;
  updatedAt: Date;
}

const RepoMeta = ({ language, stargazerCount, forkCount, updatedAt }: RepoMetaProps) => {
  const socialIcons = [
    {
      count: stargazerCount,
      Icon: <StarLogo color={colors.gray600} />,
    },
    {
      count: forkCount,
      Icon: <BranchLogo color={colors.gray600} />,
    },
  ].filter((o) => o.count > 0);

  return (
    <>
      <MetaData>
        {language && (
          <Language>
            <LanguageColor color={getColorForLanguage(language)} />
            <Text>{language}</Text>
          </Language>
        )}
        {socialIcons.length > 0 && (
          <SocialWrapper>
            {socialIcons.map(({ count, Icon }, i) => (
              <MetaIcon key={i}>
                {Icon}
                <Text style={{ marginLeft: 4 }}>{count}</Text>
              </MetaIcon>
            ))}
          </SocialWrapper>
        )}
        <DateWrapper>
          <Text>
            Updated{' '}
            {formatDistance(new Date(updatedAt), Date.now(), {
              addSuffix: true,
            })}
          </Text>
        </DateWrapper>
      </MetaData>
    </>
  );
};

export default RepoMeta;
