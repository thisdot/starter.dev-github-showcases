import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from '../../../../projects/shared/src/lib/components/icons/icons.module';
import { PaginationComponent } from './pagination.component';

@NgModule({
  declarations: [PaginationComponent],
  imports: [CommonModule, IconsModule],
  exports: [PaginationComponent],
})
export class PaginationModule {}
