import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataContainerComponent } from './data-container.component';

@NgModule({
  declarations: [DataContainerComponent],
  imports: [CommonModule],
  exports: [DataContainerComponent],
})
export class DataContainerComponentModule {}
