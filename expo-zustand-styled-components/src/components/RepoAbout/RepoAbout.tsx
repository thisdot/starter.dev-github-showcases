import * as WebBrowser from 'expo-web-browser';
import { ActivityIndicator } from 'react-native';
import LinkIcon from '../Icons/LinkIcon';
import { ReadmeBookIcon } from '../Icons/ReadmeBookIcon';
import {
  AboutContainerStyled,
  HeaderStyled,
  DefaultRepoTextStyled,
  TagStyled,
  TagTextStyled,
  SpacingContainerStyled,
  LinkContainerStyled,
  WebsiteLinkStyled,
  ReadmeHoverEffectStyled,
  ReadmeTextStyled,
  DescriptionTextStyled,
  TagsContainerStyled,
} from './RepoAbout.styles';

type Props = {
  description?: string | null;
  homepageUrl?: string | null;
  topics?: string[];
  isLoading?: boolean;
};

export default function RepoAbout({ description, homepageUrl, topics, isLoading }: Props) {
  return (
    <AboutContainerStyled>
      <HeaderStyled>About</HeaderStyled>
      <SpacingContainerStyled>
        {isLoading ? (
          <ActivityIndicator size="small" />
        ) : (
          <>
            {description ? (
              <DescriptionTextStyled>{description}</DescriptionTextStyled>
            ) : (
              <DefaultRepoTextStyled>
                No description, website, or topics provided.
              </DefaultRepoTextStyled>
            )}

            {homepageUrl ? (
              <LinkContainerStyled onPress={() => WebBrowser.openBrowserAsync(homepageUrl)}>
                <LinkIcon />
                <WebsiteLinkStyled>{homepageUrl}</WebsiteLinkStyled>
              </LinkContainerStyled>
            ) : null}
            <TagsContainerStyled>
              {topics?.map((topic, index) => (
                <TagStyled key={index}>
                  <TagTextStyled>{topic}</TagTextStyled>
                </TagStyled>
              ))}
            </TagsContainerStyled>
          </>
        )}
      </SpacingContainerStyled>

      <ReadmeHoverEffectStyled>
        <ReadmeBookIcon />
        <ReadmeTextStyled>Readme</ReadmeTextStyled>
      </ReadmeHoverEffectStyled>
    </AboutContainerStyled>
  );
}
