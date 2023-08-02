import * as WebBrowser from 'expo-web-browser';
import { useWindowDimensions } from 'react-native';
import { useRepoInfoStore } from '../../hooks/stores';
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

export default function RepoAbout() {
  const { width } = useWindowDimensions();
  const { info } = useRepoInfoStore();

  return (
    <AboutWrapper screenWidth={width}>
      <AboutContainerStyled>
        <HeaderStyled>About</HeaderStyled>
        {info?.description ? (
          <DescriptionTextStyled>{info.description}</DescriptionTextStyled>
        ) : (
          <DefaultRepoTextStyled>
            No description, website, or topics provided.
          </DefaultRepoTextStyled>
        )}

        {info?.homepageUrl ? (
          <LinkContainerStyled onPress={() => WebBrowser.openBrowserAsync(info.homepageUrl)}>
            <LinkIcon />
            <WebsiteLinkStyled>{info.homepageUrl}</WebsiteLinkStyled>
          </LinkContainerStyled>
        ) : null}

        {info?.topics?.length > 0 ? (
          <TagsContainerStyled>
            {info?.topics.map((topic, index) => (
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
