import styled from 'styled-components/native';
import { colors } from '../../utils/style-variables';
import {breakpoints} from '../../utils/breakpoints';

type ScreenWidth = {
  screenWidth: number | undefined;
};

export const RepoFilterWrapper = styled.View<ScreenWidth>`
  gap: 10px;
  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${colors.gray300};
  flex-direction: ${({screenWidth}) => screenWidth >= breakpoints.laptop ? 'row' : 'column'}
`;

export const FiltersWrapper = styled.ScrollView<ScreenWidth>`
  gap: 10px;
  width: 100%;
  z-index: 500;
  elevation: 500;
  flex-direction: row;
  background-color: #fff;
`;

export const FilterTextWrapper = styled.View`
  gap: 12px;
  flex-direction: row;
  align-items: center;
  padding-vertical: 10px;
  border-bottom-width: 1px;
  padding-horizontal: 16px;
  border-bottom-style: solid;
  justify-content: space-between;
  border-bottom-color: ${colors.gray300};
`;

export const FilterTextContent = styled.View`
  gap: 4px;
  flex-grow: 1;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
`;

export const SearchTextInput = styled.TextInput`
  width: 100%;
  font-size: 16px;
  padding: 8px 12px;
  border-radius: 8px;
  background-color: #FFF;
  color: ${colors.gray500};
  border: 1px solid ${colors.gray300};
`;

export const RepoBtn = styled.TouchableOpacity`
  gap: 8px;
  padding: 6px 12px;
  flex-direction: row;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primaryGreen};
`;

export const RepoBtnText = styled.Text`
  color: #FFF;
  font-size: 14px;
  font-weight: 700;
`;


export const ClearFilter = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const ClearIcon = styled.TouchableOpacity`
  width: 25px;
  height: 25px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${colors.blue600};
`;

export const ClearText = styled.Text<ScreenWidth>`
  color:  ${colors.blue600};
  display: ${({screenWidth}) => screenWidth > breakpoints.tablet ? 'flex' : 'none'};
`;