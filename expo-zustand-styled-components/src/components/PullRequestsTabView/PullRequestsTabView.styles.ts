import styled from 'styled-components/native';
import { colors } from '../../utils/style-variables';
import { breakpoints } from '../../utils/breakpoints';

type ScreenWidth = {
  screenWidth: number | undefined;
};

export const MainContainer = styled.ScrollView<ScreenWidth>`
  width: ${({ screenWidth }) => (screenWidth > breakpoints.tablet ? '80%' : '100%')};
  margin-horizontal: auto;
`;

export const ContentContainer = styled.ScrollView`
  border-radius: 16px;
  border: 1px solid ${colors.gray300};
`;

export const Pagination = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-vertical: 16px;
  margin-horizontal: auto;
`;

export const PaginationBtn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const EmptyPullRequest = styled.View`
  align-items: center;
  padding: 16px;
`;
