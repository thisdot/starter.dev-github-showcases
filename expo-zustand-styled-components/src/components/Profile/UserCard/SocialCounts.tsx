import React from 'react';

import { Socials, SpanCount, Count, SpaceSpan } from './UserCard.styles';
import UsersIcon from '../../Icons/UsersIcon';
import StarIcon from '../../Icons/StarIcon';

interface SocialCountsProps {
  followers?: number;
  following?: number;
  starredRepositories?: number;
}

export default function SocialCounts({
  followers,
  following,
  starredRepositories,
}: SocialCountsProps) {
  return (
    <Socials>
      <UsersIcon color={'#57606a'} style={{ marginRight: 4 }} />
      <SpanCount>
        <Count>{followers}</Count> followers
      </SpanCount>
      <SpaceSpan>·</SpaceSpan>
      <SpanCount>
        <Count>{following}</Count> following
      </SpanCount>
      <SpaceSpan>·</SpaceSpan>
      <StarIcon color={'#57606a'} style={{ marginRight: 4 }} />
      <SpanCount>
        <Count>{starredRepositories}</Count>
      </SpanCount>
    </Socials>
  );
}
