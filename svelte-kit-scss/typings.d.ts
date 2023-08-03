interface LanguageColors {
  [language: string]: string;
}

declare module 'svelte-kit-scss/src/lib/data/language-colors.json' {
  const value: LanguageColors;
  export default value;
}
