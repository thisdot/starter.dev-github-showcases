import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountButtonGroupComponent } from './count-button-group.component';
import { PipesModule } from '../../pipes';

@NgModule({
  declarations: [CountButtonGroupComponent],
  imports: [CommonModule, PipesModule],
  exports: [CountButtonGroupComponent],
})
export class CountButtonGroupComponentModule {}
