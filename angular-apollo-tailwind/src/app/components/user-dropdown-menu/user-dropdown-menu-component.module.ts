import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDropdownMenuComponent } from './user-dropdown-menu.component';
import { RouterModule } from '@angular/router';
import { ChevronDropdownIconComponentModule } from '../chevron-dropdown-icon/chevron-dropdown-icon-component.module';

@NgModule({
  declarations: [UserDropdownMenuComponent],
  imports: [CommonModule, RouterModule, ChevronDropdownIconComponentModule],
  exports: [UserDropdownMenuComponent],
})
export class UserDropdownMenuComponentModule {}
