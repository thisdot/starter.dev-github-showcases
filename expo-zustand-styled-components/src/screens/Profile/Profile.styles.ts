import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const SafeAreaViewStyled = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

export const ContainerStyled = styled.ScrollView`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
`;

export const MainContentLayout = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: ${Platform.OS === 'web' ? 'row' : 'column'};
  padding-horizontal: ${Platform.OS === 'web' ? '10%' : '16px' };
`;

export const ContentLayout = styled.View`
  flex: 1;
  width: 100%;
`;

export const ProfileNavViewStyled = styled.View`
  padding-vertical: 16px;
  border-bottom-width: 1px;
  border-bottom-color: #e1e4e8;
`;
