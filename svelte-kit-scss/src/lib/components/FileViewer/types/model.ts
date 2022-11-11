import type { Language } from './language';
import type { Grammar, Token as PrismToken } from 'prismjs';

export type Token = {
  types: string[];
  content: string;
  empty?: boolean;
};

export type TokenEnv = {
  code: string;
  grammar: Grammar;
  language: Language;
  tokens: Array<string | PrismToken>;
};

export type StyleObj = { [styleKey: string]: string | number | symbol | null | undefined };

export type LineInputProps = {
  style?: StyleObj;
  className?: string;
  line: Token[];
};

// todo: remove
// export type LineOutputProps = {
//   style: StyleObj;
//   className: string;
// };

export type TokenInputProps = {
  style?: StyleObj;
  className?: string;
  token: Token;
};

export type TokenOutputProps = {
  style: StyleObj;
  className: string;
  content: string;
};

// todo: remove
// export type RenderProps = {
//   tokens: Token[][];
//   klass: string;
//   getLineProps: (input: LineInputProps) => LineOutputProps;
//   getTokenProps: (input: TokenInputProps) => TokenOutputProps;
// };

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
  'text-decorationLine'?: 'none' | 'underline' | 'line-through' | 'underline line-through';
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
