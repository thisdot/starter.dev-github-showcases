import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LineComponent, PrismComponent, TokenComponent } from './components';

@NgModule({
  declarations: [PrismComponent, LineComponent, TokenComponent],
  imports: [CommonModule],
  exports: [PrismComponent, LineComponent, TokenComponent],
})
export class PrismModule {}
