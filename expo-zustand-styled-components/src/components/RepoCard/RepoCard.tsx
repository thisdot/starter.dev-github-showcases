import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, TouchableWithoutFeedback, useWindowDimensions } from 'react-native';

import {
  Card,
  Badge,
  Content,
  Heading,
  StarBtn,
  LinkText,
  BadgeText,
  Description,
} from './RepoCard.styles';

import { colors } from '../../utils/style-variables';
import { Repo } from '../../types/user-repos-type';

import { StarLogo } from '../Icons/StarLogo';
import RepoMeta from './RepoMeta';
interface RepoCardProps {
  repo: Repo;
  isProfilePage?: boolean;
}

const RepoCard = ({ repo, isProfilePage }: RepoCardProps) => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();

  return (
    <Card>
      <Content>
        <Heading>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('AppNavigator', {
                screen: 'RepoNavigator',
                params: {
                  screen: 'Code',
                  params: {
                    owner: repo.owner.login,
                    name: repo.name,
                  },
                },
              })
            }>
            <LinkText screenWidth={width}>{repo.name}</LinkText>
          </TouchableOpacity>
          <Badge>
            <BadgeText>
              {repo.visibility.charAt(0).toUpperCase() + repo.visibility.slice(1).toLowerCase()}
            </BadgeText>
          </Badge>
        </Heading>
        <Description numberOfLines={2}>{repo.description}</Description>
        <RepoMeta
          language={repo.primaryLanguage.name}
          updatedAt={repo.updatedAt}
          stargazerCount={repo.stargazerCount}
          forkCount={repo.forkCount}
        />
      </Content>
      {isProfilePage && (
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
