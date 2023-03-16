import styled from 'styled-components/native';
import { colors } from '../../utils/style-variables';

export const Card = styled.View`
  flex-direction: row;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: ${colors.gray300};
  padding-vertical: 8px;
  padding-horizontal: 10px;
`;

export const Content = styled.View`
  flex: 1 1 auto;
  padding-right: 6px;
  padding-left: 10px;
`;

export const TitleLabelsWrapper = styled.View`
  flex-direction: row;
  gap: 6px;
  flex-wrap: wrap;
  align-items: center;
`;

export const ContentTitle = styled.Text`
  font-weight: 700;
  font-size: 16px;
`;

export const Labels = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const LabelView = styled.View<{ color }>`
  background-color: ${({ color }) => (color ? '#' + color : '#CCC')};
  margin-left: 4px;
  padding-horizontal: 10px;
  padding-vertical: 6px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`;

export const ContentFooter = styled.Text`
  flex-direction: row;
  margin-top: 4px;
  color: ${colors.gray500};
`;

export const CommentCountWrapper = styled.View`
  flex-shrink: 0;
  text-align: right;
  flex-wrap: nowrap;
`;

export const CommentCount = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
`;
