import { Users, Star } from '@styled-icons/heroicons-outline';
import { Count, Socials, SpaceSpan, SpanCount } from './UserProfile.styles';

interface SocialIconProps {
  followers: number | undefined;
  following: number | undefined;
  starredRepos: number | undefined;
}

export const SocialIcons = ({
  followers,
  following,
  starredRepos,
}: SocialIconProps) => (
  <Socials>
    <Users />
    <SpanCount>
      <Count>{followers}</Count> followers
    </SpanCount>
    <SpaceSpan>·</SpaceSpan>
    <SpanCount>
      <Count>{following}</Count> following
    </SpanCount>
    <SpaceSpan>·</SpaceSpan>
    <Star />
    <SpanCount>
      <Count data-testid="profile starred count">{starredRepos}</Count>{' '}
    </SpanCount>
  </Socials>
);
