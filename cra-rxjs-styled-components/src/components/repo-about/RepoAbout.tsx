import { LinkIcon, ReadmeBookIcon } from '../icons/index';
import {
	AboutContainer,
	Header,
	DefaultRepoText,
	Tag,
	SpacingContainer,
	LinkContainer,
	WebsiteLink,
	ReadmeHoverEffect,
	ReadmeText,
	DescriptionText,
	ReadmeIconStyles,
	TagsContainer,
} from './RepoAbout.styles';

type Props = {
	description?: string | null;
	homepageUrl?: string | null;
	topics?: string[];
};

export default function RepoAbout({ description, homepageUrl, topics }: Props) {
	return (
		<AboutContainer>
			<Header>About</Header>
			<SpacingContainer>
				{description ? (
					<DescriptionText>{description}</DescriptionText>
				) : (
					<DefaultRepoText>
						No description, website, or topics provided.
					</DefaultRepoText>
				)}

				{homepageUrl ? (
					<LinkContainer>
						<LinkIcon />
						<WebsiteLink href={homepageUrl} rel="noopener" target="_blank">
							{homepageUrl}
						</WebsiteLink>
					</LinkContainer>
				) : null}
				<TagsContainer>
					{topics?.map((topic, index) => (
						<Tag key={index}>{topic}</Tag>
					))}
				</TagsContainer>
			</SpacingContainer>

			<ReadmeHoverEffect>
				<ReadmeIconStyles>
					<ReadmeBookIcon />
				</ReadmeIconStyles>
				<ReadmeText>Readme</ReadmeText>
			</ReadmeHoverEffect>
		</AboutContainer>
	);
}
