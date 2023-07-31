import { getTextColor } from './dynamicColor';

describe('getTextColor', () => {
  test('should return white if the contrast with white is greater than the contrast with black for color #000000', () => {
    expect(getTextColor('#000000')).toBe('#ffffff');
  });

  test('should return white if the contrast with white is greater than the contrast with black for color #7b7b7b', () => {
    expect(getTextColor('#7b7b7b')).toBe('#ffffff');
  });

  test('should return white if the contrast with white is greater than the contrast with black for color #a1a1a1', () => {
    expect(getTextColor('#a1a1a1')).toBe('#ffffff');
  });

  test('should return black if the contrast with black is greater than the contrast with white for color #dcdcdc', () => {
    expect(getTextColor('#dcdcdc')).toBe('#000000');
  });

  test('should return black if the contrast with black is greater than the contrast with white for color #ffffff', () => {
    expect(getTextColor('#ffffff')).toBe('#000000');
  });

  test('should return white if the contrast with white is greater than the contrast with black for color #223344', () => {
    expect(getTextColor('#223344')).toBe('#ffffff');
  });

  test('should return white if the contrast with white is greater than the contrast with black for color #555555', () => {
    expect(getTextColor('#555555')).toBe('#ffffff');
  });

  test('should return white if the contrast with white is greater than the contrast with black for color #888888', () => {
    expect(getTextColor('#888888')).toBe('#ffffff');
  });

  test('should return black if the contrast with black is greater than the contrast with white for color #c1c1c1', () => {
    expect(getTextColor('#c1c1c1')).toBe('#000000');
  });

  test('should return black if the contrast with black is greater than the contrast with white for color #f0f0f0', () => {
    expect(getTextColor('#f0f0f0')).toBe('#000000');
  });
});
