import styled from 'styled-components/native';
import { breakpoints } from '../../utils/breakpoints';
import { colors } from '../../utils/style-variables';

export const AboutContainerStyled = styled.View`
  gap: 10px;
  padding: 16px 0px;
  border-bottom-width: 2px;
  border-bottom-color: ${colors.gray300};
`;

export const AboutWrapper = styled.View<{ screenWidth: number }>`
  ${({ screenWidth }) => {
    if (screenWidth >= breakpoints.tablet) {
      return `flex: 0.25`;
    }
  }}
`;

export const HeaderStyled = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.gray700};
`;

export const DefaultRepoTextStyled = styled.Text`
  font-style: italic;
  color: ${colors.gray600};
`;

export const DescriptionTextStyled = styled.Text`
  line-height: 24px;
  color: ${colors.gray600};
`;

export const LinkContainerStyled = styled.TouchableOpacity`
  display: flex;
  margin: 32px 0;
  max-width: 100%;
  overflow: hidden;
  flex-direction: row;
`;

export const WebsiteLinkStyled = styled.Text`
  margin-left: 8px;
  text-decoration: none;
  color: ${colors.blue600};
`;

export const TagsContainerStyled = styled.View`
  gap: 8px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const TagStyled = styled.TouchableOpacity`
  border-radius: 999rem;
  background-color: ${colors.blue100};
`;

export const TagTextStyled = styled.Text`
  font-size: 12px;
  font-weight: 600;
  padding: 3.2px 8px;
  color: ${colors.blue600};
`;

export const ReadmeHoverEffectStyled = styled.TouchableOpacity`
  display: flex;
  cursor: pointer;
  flex-direction: row;
  align-items: center;
`;

export const ReadmeTextStyled = styled.Text`
  margin-left: 8px;
`;
