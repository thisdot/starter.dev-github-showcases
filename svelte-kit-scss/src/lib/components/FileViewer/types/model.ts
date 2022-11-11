import type { Language } from './language';

export type Token = {
  types: string[];
  content: string;
  empty?: boolean;
};

export type StyleObj = { [styleKey: string]: string | number | symbol | null | undefined };

export type PrismThemeStyleEntry = StyleObj & {
  color?: string;
  'background-color'?: string;
  'font-style'?: 'normal' | 'italic';
  'font-weight'?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  'text-decoration-line'?: 'none' | 'underline' | 'line-through' | 'underline line-through';
  opacity?: number;
};

export type PrismTheme = {
  plain: PrismThemeStyleEntry;
  styles: Array<{
    types: string[];
    style: PrismThemeStyleEntry;
    languages?: Language[];
  }>;
};
