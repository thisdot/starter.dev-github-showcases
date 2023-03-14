import styled from 'styled-components/native';
import { colors } from '../../utils/style-variables';

export const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
`;

export const BtnGroup = styled.View`
  flex-direction: row;
  border-radius: 8px;
  margin-horizontal: 4px;
`;

export const BtnMain = styled.TouchableOpacity`
  padding-horizontal: 12px;
  padding-vertical: 6px;
  background-color: transparent;
  border: 1px solid ${colors.gray300};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border-right-width: 0;
`;

export const BtnMainText = styled.View`
  color: ${colors.gray700};
  font-weight: 500;
  font-size: 12px;
  flex-direction: row;
  align-items: center;
`;


export const BtnSide = styled.View`
  justify-content: center;
  padding-horizontal: 10px;
  padding-vertical: 2px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: #FFF;
  border: 1px solid ${colors.gray300};
`;


export const BtnSideText = styled.Text`
  color: ${colors.gray700};
  font-weight: 700;
  font-size: 12px;
`;