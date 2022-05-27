import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToasterComponent } from './toaster.component';
import { IconsModule } from '../../../../projects/shared/src/public-api';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [ToasterComponent, ToastComponent],
  imports: [CommonModule, IconsModule],
  exports: [ToasterComponent],
})
export class ToasterModule {}
