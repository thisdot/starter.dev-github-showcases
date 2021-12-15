import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterDropdownComponent } from './filter-dropdown.component';
import { IconsModule } from '../icons/icons.module';

@NgModule({
  declarations: [FilterDropdownComponent],
  imports: [CommonModule, IconsModule],
  exports: [FilterDropdownComponent],
})
export class FilterDropdownModule {}
