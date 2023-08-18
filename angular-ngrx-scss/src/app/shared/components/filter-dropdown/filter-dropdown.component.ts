import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

export interface FilterOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-filter-dropdown',
  templateUrl: './filter-dropdown.component.html',
  styleUrls: ['./filter-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  @Input() current?: string | null = '';
  @Input() items: FilterOption[] = [];
  @Input() toggle? = false;
  @Input() isRepo? = false;

  @Output() setFilter: EventEmitter<string> = new EventEmitter();

  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  handleSetFilterClick(label: string) {
    if (label === this.current) {
      if (this.toggle) {
        this.setFilter.emit('');
      } else {
        this.setFilter.emit(this.items[0].value);
      }
    } else {
      this.setFilter.emit(label);
    }
    this.isOpen = false;
  }

  handleClearFilterClick() {
    if (!this.toggle) {
      this.setFilter.emit(this.items[0].value);
    } else {
      this.setFilter.emit('');
    }
    this.isOpen = false;
  }

  handleCloseDropdown() {
    this.isOpen = false;
  }
}
