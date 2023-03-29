import styled from 'styled-components/native';
import { colors } from '../../../utils/style-variables';

export const OrganizationsWrapper = styled.View`
  margin-top: 20px;
  padding-horizontal: 16px;
  border-top-width: 1px;
  border-style: solid;
  border-top-color: ${colors.gray100};
`;
export const Heading = styled.Text`
  margin-top: 8px;
  margin-bottom: 8px;
  padding-top: 8px;
  color: rgb(31, 41, 55);
  font-weight: 700;
  font-size: 16px;
`;

export const Organizations = styled.View`
  flex-direction: row;
  gap: 8px;
`;

export const Organisation = styled.View`
  width: 36px;
  height: 36px;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid rgb(209, 213, 219);
  background-color: ${colors.gray300};
`;

export const OrgImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: cover;
`;
