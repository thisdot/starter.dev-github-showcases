import type { Language, StyleObj, PrismTheme, PrismThemeStyleEntry } from '../types';

export type ThemeDict = {
  plain: PrismThemeStyleEntry;
  [type: string]: PrismThemeStyleEntry;
};

export const themeToDict = (theme: PrismTheme, language: Language): ThemeDict => {
  const { plain } = theme;

  const base: ThemeDict = {
    plain: { ...plain, 'background-color': undefined },
  };

  const themeDict = theme.styles.reduce((acc, themeStylesEntry) => {
    const { languages, style } = themeStylesEntry;
    if (languages && !languages.includes(language)) {
      return acc;
    }

    themeStylesEntry.types.forEach((type) => (acc[type] = { ...acc[type], ...style }));

    return acc;
  }, base);

  themeDict.plain = { ...plain, 'background-color': null } as StyleObj;

  return themeDict;
};
