import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from '../../../../projects/shared/src/lib/components/icons/icons.module';
import { ReposFilterDropdownComponent } from './repos-filter-dropdown.component';

@NgModule({
  declarations: [ReposFilterDropdownComponent],
  imports: [CommonModule, IconsModule],
  exports: [ReposFilterDropdownComponent],
})
export class ReposFilterDropdownModule {}
