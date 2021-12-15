import { trigger, transition, style, animate } from '@angular/animations';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

export interface FilterOption {
  label: string;
  value: number | string | null;
}

@Component({
  selector: 'app-filter-dropdown',
  templateUrl: './filter-dropdown.component.html',
  styleUrls: ['./filter-dropdown.component.css'],
  animations: [
    trigger('openClose', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('100ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        animate('75ms', style({ opacity: 0, transform: 'scale(0.95)' })),
      ]),
    ]),
  ],
})
export class FilterDropdownComponent {
  @Input() name = '';
  @Input() description = '';
  @Input() current: string | null = '';
  @Input() items: FilterOption[] | null = [];
  @Input() buttonClassName = '';

  @Output() setFilter: EventEmitter<number | string | null> =
    new EventEmitter();

  isOpen = false;

  constructor(private elRef: ElementRef) {}

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  handleSetFilterClick(label: number | string | null) {
    this.setFilter.emit(label);
  }

  // TODO: maybe convert to directive
  @HostListener('document:click', ['$event'])
  onClick(event: PointerEvent) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}
