import * as WebBrowser from 'expo-web-browser';
import { useWindowDimensions } from 'react-native';
import LinkIcon from '../Icons/LinkIcon';
import { ReadmeBookIcon } from '../Icons/ReadmeBookIcon';
import {
  TagStyled,
  AboutWrapper,
  HeaderStyled,
  TagTextStyled,
  ReadmeTextStyled,
  WebsiteLinkStyled,
  TagsContainerStyled,
  LinkContainerStyled,
  AboutContainerStyled,
  DescriptionTextStyled,
  DefaultRepoTextStyled,
  ReadmeHoverEffectStyled,
} from './RepoAbout.styles';

type Props = {
  description?: string | null;
  homepageUrl?: string | null;
  topics?: string[];
};

export default function RepoAbout({ description, homepageUrl, topics }: Props) {
  const { width } = useWindowDimensions();
  
  return (
    <AboutWrapper screenWidth={width}>
    <AboutContainerStyled>
      <HeaderStyled>About</HeaderStyled>
      {description ? (
        <DescriptionTextStyled>{description}</DescriptionTextStyled>
      ) : (
        <DefaultRepoTextStyled>No description, website, or topics provided.</DefaultRepoTextStyled>
      )}

      {homepageUrl ? (
        <LinkContainerStyled onPress={() => WebBrowser.openBrowserAsync(homepageUrl)}>
          <LinkIcon />
          <WebsiteLinkStyled>{homepageUrl}</WebsiteLinkStyled>
        </LinkContainerStyled>
      ) : null}

      {topics?.length > 0 ? (
        <TagsContainerStyled>
          {topics.map((topic, index) => (
            <TagStyled key={index}>
              <TagTextStyled>{topic}</TagTextStyled>
            </TagStyled>
          ))}
        </TagsContainerStyled>
      ) : null}

      <ReadmeHoverEffectStyled>
        <ReadmeBookIcon />
        <ReadmeTextStyled>Readme</ReadmeTextStyled>
      </ReadmeHoverEffectStyled>
    </AboutContainerStyled>
    </AboutWrapper>
  );
}
