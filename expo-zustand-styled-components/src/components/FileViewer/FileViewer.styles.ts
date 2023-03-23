import styled from 'styled-components/native';
import { colors } from '../../utils/style-variables';

export const Containter = styled.View`
  width: 100%;
  overflow: hidden;
  border-width: 1px;
  border-radius: 4px;
  border-color: ${colors.gray300};
`;

export const Header = styled.View`
  font-size: 12px;
  line-height: 16px;
  flex-direction: row;
  padding-vertical: 16px;
  padding-horizontal: 12px;
  border-bottom-width: 1px;
  background-color: ${colors.gray100};
  border-bottom-color: ${colors.gray300};
`;

export const LineCount = styled.Text`
  padding-horizontal: 8px;
`;

export const ByteSize = styled.View`
  border-left-width: 1px;
  padding-horizontal: 8px;
  border-color: ${colors.gray300};
`;

export const TableRow = styled.View`
  flex-direction: row;
`;
