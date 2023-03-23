import styled from 'styled-components/native';
import { colors } from '../../../utils/style-variables';

export const Container = styled.ScrollView`
  font-size: 12px;
  text-align: left;
  width: 100%;
`;


export const CountColumn = styled.Text`
  text-align: left;
  padding-right: 16px;
  color: ${colors.gray500};
`;