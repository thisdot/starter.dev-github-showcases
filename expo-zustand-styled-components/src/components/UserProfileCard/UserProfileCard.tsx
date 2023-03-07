import React from 'react';
import { View } from 'react-native';
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
} from './UserProfileCard.styles';
import { userProfileProps } from './data';
import LocationIcon from '../Icons/LocationIcon';
import LinkIcon from '../Icons/LinkIcon';
import OfficeBuildingIcon from '../Icons/OfficeBuildingIcon';
import TwitterIcon from '../Icons/TwitterIcon';
import OrgList from './OrgList';
import SocialCounts from './SocialCounts';
import { useWindowDimensions } from 'react-native';

/**
 * Its expected that this userProfileProps object is gotten from a store,
 * but at the moment we are using a dummy data
 * */

const UserProfileCard = () => {
  const { width } = useWindowDimensions();
  return (
    <UserProfileCardWrapper screenWidth={width}>
      <UserDetails screenWidth={width}>
        <Avatar screenWidth={width} source={{ uri: userProfileProps.avatarUrl }} />
        <NameContainer>
          <Name screenWidth={width}>{userProfileProps?.name}</Name>
          <Username screenWidth={width}>{userProfileProps?.login}</Username>
        </NameContainer>
      </UserDetails>
      <Bio>{userProfileProps?.bio}</Bio>
      <SocialCounts
        followers={userProfileProps?.followers.totalCount}
        following={userProfileProps?.following.totalCount}
        starredRepositories={userProfileProps?.starredRepositories.totalCount}
      />
      <View style={{ marginVertical: 8 }}>
        {userProfileProps?.company && (
          <FieldWrapper>
            <OfficeBuildingIcon color={'#57606a'} />
            <Field>{userProfileProps.company}</Field>
          </FieldWrapper>
        )}
        {userProfileProps?.location && (
          <FieldWrapper>
            <LocationIcon color={'#57606a'} />
            <Field>{userProfileProps.location}</Field>
          </FieldWrapper>
        )}
        {userProfileProps?.websiteUrl && (
          <FieldWrapper>
            <LinkIcon color={'#57606a'} />
            <Field>{userProfileProps.websiteUrl}</Field>
          </FieldWrapper>
        )}
        {userProfileProps?.twitterUsername && (
          <FieldWrapper>
            <TwitterIcon color={'#57606a'} />
            <Field>@{userProfileProps.twitterUsername}</Field>
          </FieldWrapper>
        )}
      </View>

      {userProfileProps?.organizations.nodes.length > 0 && (
        <OrgList organizations={userProfileProps.organizations.nodes} />
      )}
    </UserProfileCardWrapper>
  );
};

export default UserProfileCard;
