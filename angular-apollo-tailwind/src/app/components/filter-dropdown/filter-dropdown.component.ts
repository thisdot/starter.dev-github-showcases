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
  value: string;
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
  @Input() items: FilterOption[] = [];

  @Output() setFilter: EventEmitter<string> = new EventEmitter();

  isOpen = false;

  constructor(private elRef: ElementRef) {}

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  handleSetFilterClick(label: string) {
    if (label === this.current) {
      this.setFilter.emit('');
    } else {
      this.setFilter.emit(label);
    }
    this.isOpen = false;
  }

  handleClearFilterClick() {
    this.setFilter.emit('');
    this.isOpen = false;
  }

  // TODO: maybe convert to directive
  @HostListener('document:click', ['$event'])
  onClick(event: PointerEvent) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}
