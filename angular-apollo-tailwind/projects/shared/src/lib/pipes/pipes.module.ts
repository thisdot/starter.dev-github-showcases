import { NgModule } from '@angular/core';
import { FormatDistancePipe, RoundUpPipe } from './';

@NgModule({
  declarations: [FormatDistancePipe, RoundUpPipe],
  exports: [FormatDistancePipe, RoundUpPipe],
})
export class PipesModule {}
