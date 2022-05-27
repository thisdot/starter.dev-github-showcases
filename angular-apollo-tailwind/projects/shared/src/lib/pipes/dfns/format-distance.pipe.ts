import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance, Locale } from 'date-fns';

const isValidDate = (date: Date | number): boolean =>
  !(date === undefined || date === null);

@Pipe({
  name: 'formatDistance',
})
export class FormatDistancePipe implements PipeTransform {
  transform(
    date: Date | number | string,
    dateToCompare: Date | number,
    options?: {
      includeSeconds?: boolean;
      addSuffix?: boolean;
      locale?: Locale;
    },
  ): string {
    if (typeof date === 'string') {
      date = new Date(date);
      return formatDistance(date, dateToCompare, options);
    }
    if (isValidDate(date) && isValidDate(dateToCompare)) {
      return formatDistance(date, dateToCompare, options);
    }
    return '';
  }
}
