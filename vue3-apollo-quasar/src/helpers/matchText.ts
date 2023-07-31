export const matchText = (target: string, value: string): string[] =>
  target?.match(new RegExp(value, 'i'));
