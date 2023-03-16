import styled from 'styled-components/native';
import { colors } from '../../utils/style-variables';

export const Container = styled.View`
  border: 1px solid ${colors.gray300};
  border-radius: 16px;
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
