import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  StyleObj,
  Token,
  TokenInputProps,
  TokenOutputProps,
} from '../../types';
import { ThemeDict } from '../../utils';

@Component({
  selector: 'td-token',
  templateUrl: './token.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokenComponent implements OnInit {
  @Input() line: Token[] = [];
  @Input() themeDict!: ThemeDict;
  @Input() className?: string;
  @Input() style: StyleObj = null;

  tokens!: TokenOutputProps[];

  ngOnInit(): void {
    this.tokens = this.line.reduce((a: TokenOutputProps[], token: Token) => {
      a.push({ ...this.getTokenProps({ token }) });
      return a;
    }, []);
  }

  private getStyleForToken({ types, empty }: Token) {
    const typesSize = types.length;
    const themeDict = this.themeDict;

    if (themeDict === undefined) {
      return undefined;
    } else if (typesSize === 1 && types[0] === 'plain') {
      return empty ? { display: 'inline-block' } : undefined;
    } else if (typesSize === 1 && !empty) {
      return themeDict[types[0]];
    }

    const baseStyle = empty ? { display: 'inline-block' } : {};
    const typeStyles = types.map((type) => themeDict[type]);
    return Object.assign(baseStyle, ...typeStyles);
  }

  getTokenProps({ token }: TokenInputProps): TokenOutputProps {
    const output: TokenOutputProps = {
      className: `token ${token.types.join(' ')}`,
      content: token.content,
      style: this.getStyleForToken(token),
    };

    if (this.style !== undefined) {
      output.style =
        output.style !== null ? { ...output.style, ...this.style } : this.style;
    }

    if (this.className) {
      output.className += ` ${this.className}`;
    }

    return output;
  }
}
