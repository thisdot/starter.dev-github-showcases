import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';
import * as octicons from '@primer/octicons';

@Directive({
  selector: '[appOcticon]',
})
export class OcticonsDirective implements OnInit {
  @Input() appOcticon = '';
  @Input() color?: string;
  @Input() size?: string;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const el: HTMLElement = this.elementRef.nativeElement;
    const svg: string =
      octicons[this.appOcticon as keyof typeof octicons].toSVG();
    el.innerHTML = svg;

    const icon = el.firstChild;
    if (this.color) {
      this.renderer.setStyle(icon, 'fill', this.color);
    }
    if (this.size) {
      this.renderer.setStyle(icon, 'width', this.size);
      this.renderer.setStyle(icon, 'height', '100%');
    }
  }
}
