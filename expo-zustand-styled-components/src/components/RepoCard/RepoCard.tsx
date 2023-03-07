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
  repo: Repository;
  star?: boolean;
}

const RepoCard = ({ repo, star }: RepoCardProps) => {
  const {
    id,
    name,
    owner,
    description,
    stargazers_count,
    forks_count,
    language,
    updated_at,
    visibility,
  } = repo;

  return (
    <Card key={id}>
      <Content>
        <Heading>
          <Link>Repo name here</Link>
          <Badge>
            <BadgeText>{visibility.charAt(0).toUpperCase() + visibility.slice(1)}</BadgeText>
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
