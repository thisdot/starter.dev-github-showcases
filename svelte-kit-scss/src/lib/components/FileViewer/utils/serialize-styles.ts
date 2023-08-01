import type { StyleObj } from '../types';

export const serializeStyles = (styleObj?: StyleObj | null): string => {
  return styleObj
    ? Object.entries(styleObj)
        .filter(([, value]) => value !== null && value !== undefined)
        .map(([key, value]) => `${key}: ${String(value)};`)
        .join(' ')
    : String();
};
