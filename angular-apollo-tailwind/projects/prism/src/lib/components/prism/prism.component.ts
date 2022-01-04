import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import type {
  Language,
  PrismTheme,
  StyleObj,
  Token,
  TokenEnv,
} from '../../types';
import normalizeTokens from '../../utils/normalize-tokens';
import themeToDict, { ThemeDict } from '../../utils/themes-to-dict';
import {
  Grammar,
  hooks,
  languages,
  Token as PrismToken,
  tokenize,
} from 'prismjs';

type Props = {
  language: Language;
  code: string;
  theme?: PrismTheme;
};

@Component({
  selector: 'td-prism',
  templateUrl: './prism.component.html',
  styleUrls: ['./prism.components.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrismComponent implements Props, OnInit {
  @Input() code!: string;
  @Input() language!: Language;
  @Input() theme?: PrismTheme;

  prevLanguage!: Language;
  prevTheme?: PrismTheme;
  themeDict!: ThemeDict;
  className = '';
  style: StyleObj = null;
  tokens: Token[][] = [];

  ngOnInit(): void {
    this.themeDict = this.getThemeDict() as ThemeDict;
    const themeDict = this.themeDict;

    const grammar = languages[this.language];
    const mixedTokens =
      grammar !== undefined
        ? this.tokenize(this.code, grammar, this.language)
        : [this.code];
    this.tokens = normalizeTokens(mixedTokens);
    this.className = `prism-code language-${this.language}`;
    this.style = themeDict !== undefined ? themeDict.root : {};
  }

  private tokenize(
    code: string,
    grammar: Grammar,
    language: Language,
  ): Array<PrismToken | string> {
    const env: TokenEnv = {
      code,
      grammar,
      language,
      tokens: [],
    };

    hooks.run('before-tokenize', env);
    env.tokens = tokenize(env.code, env.grammar);
    const tokens = env.tokens;
    hooks.run('after-tokenize', env);

    return tokens;
  }

  private getThemeDict(): ThemeDict | undefined {
    if (
      this.themeDict !== undefined &&
      this.theme === this.prevTheme &&
      this.language === this.prevLanguage
    ) {
      return this.themeDict;
    }

    this.prevTheme = this.theme;
    this.prevLanguage = this.language;

    const themeDict = this.theme
      ? themeToDict(this.theme, this.language)
      : undefined;

    this.themeDict = themeDict as ThemeDict;

    return themeDict;
  }
}
