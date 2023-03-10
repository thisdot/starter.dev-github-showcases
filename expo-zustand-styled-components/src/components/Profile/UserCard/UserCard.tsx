import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import {
  Avatar,
  UserProfileCardWrapper,
  NameContainer,
  Name,
  Username,
  Bio,
  Field,
  FieldWrapper,
  UserDetails,
} from './UserCard.styles';
import LocationIcon from '../../Icons/LocationIcon';
import LinkIcon from '../../Icons/LinkIcon';
import OfficeBuildingIcon from '../../Icons/OfficeBuildingIcon';
import TwitterIcon from '../../Icons/TwitterIcon';
import OrgList from './OrgList';
import SocialCounts from './SocialCounts';
import { UserProfile } from '../../../types/user-profile-type';

const UserProfileCard = ({ user }: { user: UserProfile }) => {
  const { width } = useWindowDimensions();

  return (
    <UserProfileCardWrapper screenWidth={width}>
      <UserDetails screenWidth={width}>
        <Avatar screenWidth={width} source={{ uri: user.avatarUrl }} />
        <NameContainer>
          <Name screenWidth={width}>{user.name}</Name>
          <Username screenWidth={width}>{user.login}</Username>
        </NameContainer>
      </UserDetails>
      <Bio>{user.bio}</Bio>
      <SocialCounts
        followers={user.followers.totalCount}
        following={user.following.totalCount}
        starredRepositories={user.starredRepositories.totalCount}
      />
      <View style={{ marginTop: 8, paddingLeft: 16 }}>
        {user.company && (
          <FieldWrapper>
            <OfficeBuildingIcon color={'#57606a'} />
            <Field>{user.company}</Field>
          </FieldWrapper>
        )}
        {user.location && (
          <FieldWrapper>
            <LocationIcon color={'#57606a'} />
            <Field>{user.location}</Field>
          </FieldWrapper>
        )}
        {user.websiteUrl && (
          <FieldWrapper>
            <LinkIcon color={'#57606a'} />
            <Field>{user.websiteUrl}</Field>
          </FieldWrapper>
        )}
        {user.twitterUsername && (
          <FieldWrapper>
            <TwitterIcon color={'#57606a'} />
            <Field>@{user.twitterUsername}</Field>
          </FieldWrapper>
        )}
      </View>

      {user.organizations.nodes.length > 0 && <OrgList organizations={user.organizations.nodes} />}
    </UserProfileCardWrapper>
  );
};

export default UserProfileCard;
