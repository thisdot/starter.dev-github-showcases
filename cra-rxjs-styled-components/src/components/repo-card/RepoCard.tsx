import { Star } from '@styled-icons/heroicons-outline';
import { Repository } from '../../interfaces/repositories.interfaces';
import PrivacyBadge from '../misc/privacy-badge/PrivacyBadge';
import RepoMeta from '../repo-meta/RepoMeta';
import {
	Aside,
	BadgeWrapper,
	Containers,
	Content,
	Description,
	Header,
	HeadingLink,
	StarBtn,
	StarIcon,
} from './RepoCard.styles';

interface RepoCardProps {
	repo: Repository;
	star?: boolean;
	isMainPage?: boolean;
}

function RepoCard({ repo, star, isMainPage }: RepoCardProps) {
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

	const repoNameWithOwnerLink = () =>
		owner?.login ? `/${owner.login}/${name || ''}` : '';

	const repoNameWithOwner = () =>
		`${isMainPage ? `${owner?.login + '/' || ''}` : ''}${name || ''}`;

	return (
		<Containers key={id} star={star}>
			<Content>
				<Header>
					<HeadingLink to={repoNameWithOwnerLink()}>
						{repoNameWithOwner()}
					</HeadingLink>
					<BadgeWrapper>
						<PrivacyBadge visibility={visibility} />
					</BadgeWrapper>
				</Header>
				<Description>{description}</Description>
				<RepoMeta
					language={language}
					forkCount={forks_count}
					stargazerCount={stargazers_count}
					updatedAt={updated_at}
				/>
			</Content>
			{star && (
				<Aside>
					<StarBtn>
						<StarIcon>
							<Star />
						</StarIcon>
						Star
					</StarBtn>
				</Aside>
			)}
		</Containers>
	);
}

export default RepoCard;
