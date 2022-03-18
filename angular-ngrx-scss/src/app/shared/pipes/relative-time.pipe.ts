import { Pipe, PipeTransform } from '@angular/core';
import { relativeTimeFmt } from '../utils';

@Pipe({
  name: 'relativeTime',
})
export class RelativeTimePipe implements PipeTransform {
  transform(value: string): unknown {
    return relativeTimeFmt(value);
  }
}
