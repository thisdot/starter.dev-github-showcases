import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataContainerComponent } from './data-container.component';

/**
 * @deprecated Not used. Use custom components instead. Removal on 2022-07-05.
 */
@NgModule({
  declarations: [DataContainerComponent],
  imports: [CommonModule],
  exports: [DataContainerComponent],
})
export class DataContainerComponentModule {}
