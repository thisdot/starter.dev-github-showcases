import { Dimensions } from 'react-native';
const { height } = Dimensions.get('window');
const DROPDOWN_MAX_HEIGHT = height * 0.4;

export const calculateDropdownHeight = (dataLength: number) => {
  if (dataLength == 0) {
    return 150;
  } else {
    const count = dataLength;
    const height = 50 * count;
    return height < DROPDOWN_MAX_HEIGHT ? height : DROPDOWN_MAX_HEIGHT;
  }
};
