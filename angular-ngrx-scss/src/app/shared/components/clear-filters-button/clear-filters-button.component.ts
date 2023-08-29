import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-clear-filters-button',
  templateUrl: './clear-filters-button.component.html',
  styleUrls: ['./clear-filters-button.component.scss'],
})
export class ClearFiltersButtonComponent {
  @Output() clearFilters = new EventEmitter();
}
