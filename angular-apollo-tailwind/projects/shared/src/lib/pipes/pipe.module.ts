import { NgModule } from '@angular/core';
import { FormatDistancePipe } from './dfns/format-distance.pipe';

@NgModule({
  declarations: [FormatDistancePipe],
  exports: [FormatDistancePipe],
})
export class PipesModule {}
