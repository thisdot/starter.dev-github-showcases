import React from 'react';
import {
  Badge,
  BadgeText,
  Card,
  Content,
  Heading,
  Link,
  StarBtn,
  Description,
} from './RepoCard.styles';
import RepoMeta from './RepoMeta';
import { StarLogo } from '../Icons/StarLogo';
import { colors } from '../../utils/style-variables';
import { Text, TouchableWithoutFeedback } from 'react-native';

import { Repository } from '../../interface/repositories.interface';

interface RepoCardProps {
  star?: boolean;
  full_name: string;
  visibility: 'public' | 'private';
  description: string;
  forks_count: number;
  stargazers_count: number;
  language: string;
  updated_at: Date;
}

const RepoCard = ({
  full_name,
  visibility,
  description,
  forks_count,
  stargazers_count,
  language,
  updated_at,
  star,
}: RepoCardProps) => {
  return (
    <Card>
      <Content>
        <Heading>
          <Link>{full_name}</Link>
          <Badge>
            <BadgeText>{visibility}</BadgeText>
          </Badge>
        </Heading>
        <Description>{description}</Description>
        <RepoMeta
          language={language}
          updatedAt={updated_at}
          stargazerCount={stargazers_count}
          forkCount={forks_count}
        />
      </Content>
      {star && (
        <TouchableWithoutFeedback>
          <StarBtn>
            <StarLogo color={colors.gray700} width={18} height={18} />
            <Text style={{ marginLeft: 5 }}>Star</Text>
          </StarBtn>
        </TouchableWithoutFeedback>
      )}
    </Card>
  );
};

export default RepoCard;
