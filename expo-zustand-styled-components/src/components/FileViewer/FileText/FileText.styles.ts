import styled from 'styled-components/native';
import { colors } from '../../../utils/style-variables';

export const CodeBlock = styled.ScrollView`
  font-size: 12px;
  text-align: left;
  background-color: #ffffff;
`;

export const LineNumber = styled.Text`
  text-align: right;
  padding-right: 16px;
  color: ${colors.gray600};
`;
