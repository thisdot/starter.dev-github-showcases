import { Language } from './language';
import { Grammar, Token as PrismToken } from 'prismjs';

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

export type StyleObj = { [klass: string]: any } | null;

export type LineInputProps = {
  style?: StyleObj;
  className?: string;
  line: Token[];
};

export type LineOutputProps = {
  style: StyleObj;
  className: string;
};

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

export type RenderProps = {
  tokens: Token[][];
  klass: string;
  getLineProps: (input: LineInputProps) => LineOutputProps;
  getTokenProps: (input: TokenInputProps) => TokenOutputProps;
};

export type PrismThemeEntry = {
  color?: string;
  backgroundColor?: string;
  fontStyle?: 'normal' | 'italic';
  fontWeight?:
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
  textDecorationLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through';
  opacity?: number;
  [styleKey: string]: string | number | void;
};

export type PrismTheme = {
  plain: PrismThemeEntry;
  styles: Array<{
    types: string[];
    style: PrismThemeEntry;
    languages?: Language[];
  }>;
};
