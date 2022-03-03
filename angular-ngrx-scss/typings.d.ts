interface LanguageColors {
  [language: string]: string;
}

declare module 'src/assets/language-colors.json' {
  const value: LanguageColors;
  export default value;
}
