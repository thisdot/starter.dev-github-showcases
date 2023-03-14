import styled from 'styled-components/native';
import { breakpoints } from '../../utils/breakpoints';
import { colors } from '../../utils/style-variables';

export const SafeAreaViewStyled = styled.SafeAreaView`
  height: 100%;
  background-color: #fff;
`;

export const ContainerStyled = styled.ScrollView<{ screenWidth: number }>`
  flex: 1;
  width: 100%;
  height: 100%;
  position: relative;
  flex-direction: column;
  padding-horizontal: ${({ screenWidth }) => (screenWidth >= breakpoints.tablet ? '15%' : 0)};
`;

export const OrgInfoContainer = styled.View`
  gap: 6px;
  display: flex;
  padding: 16px;
  align-items: center;
  flex-direction: row;
`;

export const TabNavContainer = styled.View`
  padding-top: 8px;
  padding-horizontal: 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.gray100};
`;
