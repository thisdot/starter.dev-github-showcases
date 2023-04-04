import styled from 'styled-components/native';
import { colors } from '../../utils/style-variables';
import { breakpoints } from '../../utils/breakpoints';

type ScreenWidth = {
  screenWidth: number | undefined;
};

export const RepoFilterWrapper = styled.View<ScreenWidth>`
  gap: 10px;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${colors.gray300};
  flex-direction: ${({ screenWidth }) => (screenWidth >= breakpoints.laptop ? 'row' : 'column')};
  padding-horizontal: ${({ screenWidth }) => (screenWidth >= breakpoints.laptop ? 0 : 16)}px;
  padding-vertical: ${({ screenWidth }) => (screenWidth >= breakpoints.laptop ? 16 : 10)}px;
`;

export const FiltersWrapper = styled.ScrollView<ScreenWidth>`
  width: 100%;
  flex-direction: row;
  ${({ screenWidth }) => {
    if (screenWidth < breakpoints.desktop) {
      if (screenWidth >= breakpoints.laptop) {
        return 'flex: 0.6';
      }
    } else {
      return 'flex: 0.45';
    }
  }}
`;

export const FilterTextWrapper = styled.View`
  gap: 12px;
  z-index: -1;
  align-items: center;
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

export const SearchTextInput = styled.TextInput<ScreenWidth>`
  width: 100%;
  font-size: 16px;
  padding: 8px 12px;
  border-radius: 8px;
  background-color: #fff;
  color: ${colors.gray500};
  border: 1px solid ${colors.gray300};
  ${({ screenWidth }) => {
    if (screenWidth < breakpoints.desktop) {
      if (screenWidth >= breakpoints.laptop) {
        return 'flex: 0.4';
      }
    } else {
      return 'flex: 0.55';
    }
  }}
`;

export const RepoBtn = styled.TouchableOpacity`
  gap: 8px;
  height: 35px;
  padding: 6px 12px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
  background-color: ${colors.primaryGreen};
`;

export const RepoBtnText = styled.Text`
  color: #fff;
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
  color: ${colors.blue600};
  display: ${({ screenWidth }) => (screenWidth > breakpoints.tablet ? 'flex' : 'none')};
`;
