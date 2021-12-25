import { Component } from '@angular/core';
import { FilterDropdownComponent } from '../filter-dropdown/filter-dropdown.component';

@Component({
  selector: 'app-repos-filter-dropdown',
  templateUrl: './repos-filter-dropdown.component.html',
  styleUrls: ['./repos-filter-dropdown.component.css'],
})
export class ReposFilterDropdownComponent extends FilterDropdownComponent {}
