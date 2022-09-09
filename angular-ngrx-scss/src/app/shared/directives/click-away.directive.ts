import { Directive, ElementRef, HostListener, Input } from '@angular/core';

type ClickAwayCallback = (event: PointerEvent) => void;

@Directive({
  selector: '[appClickAway]',
})
export class ClickAwayDirective {
  @Input() appClickAway?: ClickAwayCallback;

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onClick(event: PointerEvent): void {
    if (
      this.appClickAway &&
      !this.elementRef.nativeElement.contains(event.target)
    ) {
      this.appClickAway(event);
    }
  }
}
