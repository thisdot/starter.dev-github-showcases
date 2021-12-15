import { NgModule } from '@angular/core';
import { FormatDistancePipe } from './pipes/dfns-pipes/format-distance.pipe';

@NgModule({
  declarations: [FormatDistancePipe],
  exports: [FormatDistancePipe],
})
export class SharedModule {}
