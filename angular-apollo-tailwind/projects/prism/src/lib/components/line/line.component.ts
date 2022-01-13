import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { LineOutputProps, StyleObj, Token } from '../../types';
import { ThemeDict } from '../../utils';

@Component({
  selector: 'td-line',
  templateUrl: './line.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LineComponent implements OnInit {
  @Input() tokens: Token[][] = [];
  @Input() themeDict!: ThemeDict;
  @Input() className?: string;
  @Input() style: StyleObj = null;

  lineStyles!: LineOutputProps;

  ngOnInit(): void {
    this.lineStyles = this.getLineProps();
  }

  getLineProps(): LineOutputProps {
    const output: LineOutputProps = {
      className: 'token-line',
      style: null,
    };
    const themeDict = this.themeDict;

    if (themeDict !== undefined) {
      output.style = themeDict.plain;
    }

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
