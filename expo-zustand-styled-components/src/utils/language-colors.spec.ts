import { getColorForLanguage } from './language-colors';

describe('getColorForLanguage', () => {
  it('returns color for a known language', () => {
    expect(getColorForLanguage('1C Enterprise')).toEqual('#814CCC');
    expect(getColorForLanguage('4D')).toEqual('#004289');
  });

  it('returns default color for an unknown language', () => {
    expect(getColorForLanguage('Nonexistent Language')).toEqual('#000');
  });
});
