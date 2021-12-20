import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance } from 'date-fns';

const isValidDate = (date: Date | number): boolean =>
  !(date === undefined || date === null);

@Pipe({
  name: 'formatDistance',
})
export class FormatDistancePipe implements PipeTransform {
  transform(
    date: Date | number,
    dateToCompare: Date | number,
    options?: {
      includeSeconds?: boolean;
      addSuffix?: boolean;
      locale?: Locale;
    },
  ): string {
    if (isValidDate(date) && isValidDate(dateToCompare)) {
      return formatDistance(date, dateToCompare, options);
    }
    return '';
  }
}
