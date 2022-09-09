import { Star } from '@styled-icons/heroicons-outline';
import { Repository } from '../../interfaces/repositories.interfaces';
import PrivacyBadge from '../misc/privacy-badge';
import RepoMeta from '../repo-meta';
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
}

function RepoCard({ repo, star }: RepoCardProps) {
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
		<Containers key={id} star={star}>
			<Content>
				<Header>
					<HeadingLink to={`/${owner.login}/${name}`}>{name}</HeadingLink>
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
