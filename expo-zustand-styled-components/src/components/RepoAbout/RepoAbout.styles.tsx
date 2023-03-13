import styled from 'styled-components/native';
import { colors } from '../../utils/style-variables';

export const AboutContainerStyled = styled.View`
  border-bottom: 2px solid ${colors.gray300};
  width: 100%;
`;

export const HeaderStyled = styled.Text`
  font-weight: 600;
  color: ${colors.gray700};
  font-size: 1.1em;
`;

export const SpacingContainerStyled = styled.View`
  margin-top: 1rem;
`;

export const DefaultRepoTextStyled = styled.Text`
  font-style: italic;
  color: ${colors.gray600};
`;

export const DescriptionTextStyled = styled.Text`
  font-size: inherit;
  line-height: 1.4em;
  color: ${colors.gray600};
`;

export const LinkContainerStyled = styled.TouchableOpacity`
  max-width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  margin: 2rem 0;
`;

export const WebsiteLinkStyled = styled.Text`
  margin-left: 0.5rem;
  text-decoration: none;
  color: ${colors.blue600};
`;

export const TagsContainerStyled = styled.View`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const TagStyled = styled.TouchableOpacity`
  background-color: ${colors.blue100};
  border-radius: 999rem;
`;

export const TagTextStyled = styled.Text`
  color: ${colors.blue600};
  padding: 0.2rem 0.5rem;
  font-size: 0.8em;
  font-weight: 600;
`;
