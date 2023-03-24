import styled from 'styled-components/native';
import { colors } from '../../utils/style-variables';

export const PaginationWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-vertical: 16px;
`;

export const PaginationBtnsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  elevation: 1;
  border-radius: 16px;
`;

export const PaginationBtn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding-horizontal: 16px;
  padding-vertical: 8px;
  border: 1px solid ${colors.gray300};
`;

export const PaginationBtnText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: ${colors.blue500};
`;
