import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const ContainerStyled = styled.View`
  flex: 1;
  display: flex;
  padding-right: ${Platform.OS === 'web' ? '5%' : 0};
`;

export const ContentViewStyled = styled.View`
  display: flex;
`;

export const ProfileSearchViewStyled = styled.View`
  display: flex;
`;

export const ProfileRepoViewStyled = styled.View`
  display: flex;
`;
