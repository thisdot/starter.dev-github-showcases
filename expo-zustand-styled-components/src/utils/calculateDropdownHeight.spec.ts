import { Dimensions } from 'react-native';
import { calculateDropdownHeight } from './calculateDropdownHeight';

describe('calculateDropdownHeight', () => {
  const { height } = Dimensions.get('window');
  const DROPDOWN_MAX_HEIGHT = height * 0.4;

  test('returns 150 if data length is 0', () => {
    const dataLength = 0;
    expect(calculateDropdownHeight(dataLength)).toEqual(150);
  });

  test('returns the correct height if data length is not 0', () => {
    const dataLength = 5;
    const expectedHeight = 250;
    expect(calculateDropdownHeight(dataLength)).toEqual(expectedHeight);
  });

  test('returns the max height if the calculated height is greater than the max height', () => {
    const dataLength = 50;
    expect(calculateDropdownHeight(dataLength)).toEqual(DROPDOWN_MAX_HEIGHT);
  });
});
