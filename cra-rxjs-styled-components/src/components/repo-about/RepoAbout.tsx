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
  websiteLink?: string | null;
  topics?: string[];
};

export default function RepoAbout({ description, websiteLink, topics }: Props) {
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

        {websiteLink ? (
          <LinkContainer>
            <LinkIcon />
            <WebsiteLink href={websiteLink} rel="noopener" target="_blank">
              {websiteLink}
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
