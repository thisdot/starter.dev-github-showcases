import {
	OfficeBuilding,
	LocationMarker,
} from '@styled-icons/heroicons-outline';
import { useUser } from '../../context/UserProvider';
import OrgList from './OrgList';
import { SocialIcons } from './SocialIcons';
import {
	Avatar,
	NameContainer,
	Name,
	Username,
	Bio,
	IconStyleWrapper,
	Fields,
	AnchorLink,
	TwitterIconStyles,
	LinkIconStyles,
	UserProfileContainer,
} from './UserProfile.styles';

function UserProfileView() {
	const user = useUser();
	return (
		<UserProfileContainer>
			<Avatar
				src={user?.avatar_url}
				alt="Avatar"
				width={260}
				height={260}
			></Avatar>
			<NameContainer>
				<Name>{user?.name}</Name>
				<Username>{user?.login}</Username>
			</NameContainer>
			<Bio>{user?.bio}</Bio>
			<IconStyleWrapper>
				{
					<SocialIcons
						followers={user?.followers}
						following={user?.following}
						starredRepos={user?.starredRepos}
					/>
				}
				<Fields>
					{user?.company && (
						<div>
							<OfficeBuilding />
							{user?.company}
						</div>
					)}
					{user?.location && (
						<div>
							<LocationMarker />
							{user?.location}
						</div>
					)}
					{user?.blog && (
						<div>
							<LinkIconStyles />
							<AnchorLink href={user?.blog} target="_blank" rel="noreferrer">
								{user?.blog}
							</AnchorLink>
						</div>
					)}
					{user?.twitter_username && (
						<div>
							<TwitterIconStyles />
							<AnchorLink
								href={`https:/twitter.com/${user?.twitter_username}`}
								target="_blank"
								rel="noreferrer"
							>
								@{user?.twitter_username}
							</AnchorLink>
						</div>
					)}
				</Fields>
			</IconStyleWrapper>
			{user?.organizations?.length && (
				<OrgList organizations={user?.organizations} />
			)}
		</UserProfileContainer>
	);
}

export default UserProfileView;
