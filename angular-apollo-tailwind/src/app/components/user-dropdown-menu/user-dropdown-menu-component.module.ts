import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDropdownMenuComponent } from './user-dropdown-menu.component';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';

@NgModule({
  declarations: [UserDropdownMenuComponent],
  imports: [CommonModule, RouterModule, IconsModule],
  exports: [UserDropdownMenuComponent],
})
export class UserDropdownMenuComponentModule {}
