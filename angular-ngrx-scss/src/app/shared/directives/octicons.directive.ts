import { Directive, Input, OnInit, ElementRef } from '@angular/core';
import * as octicons from '@primer/octicons';

@Directive({
  selector: '[octicon]',
})
export class OcticonsDirective implements OnInit {
  @Input() octicon: string = '';
  @Input() color?: string;
  @Input() size?: string;
  @Input() verticalAlign?: string;
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const el: HTMLElement = this.elementRef.nativeElement;
    const icon = (el.innerHTML = octicons[this.octicon].toSVG());

    if (this.color) {
      el.style.fill = this.color;
    }
    if (this.size) {
      el.style.width = this.size;
      el.style.height = `100%`;
    }
    if (this.verticalAlign) {
      el.style.verticalAlign = this.verticalAlign;
    }
  }
}
