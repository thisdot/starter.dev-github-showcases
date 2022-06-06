import { formatDistance, Locale } from 'date-fns';

const isValidDate = (date: Date | number): boolean =>
  !(date === undefined || date === null);

export type Props = {
  date: Date | number | string;
  dateToCompare: Date | number;
  options?: {
    includeSeconds?: boolean;
    addSuffix?: boolean;
    locale?: Locale;
  };
};

export function useFormatDistance({
  date,
  dateToCompare,
  options,
}: Props): string {
  if (typeof date === 'string') {
    date = new Date(date);
    return formatDistance(date, dateToCompare, options);
  }
  if (isValidDate(date) && isValidDate(dateToCompare)) {
    return formatDistance(date, dateToCompare, options);
  }
  return '';
}
