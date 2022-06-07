import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

interface UseFormatter {
  getFriendlyDate: (dateStr: string) => string;

  upperFirst: (str: string) => string;
}

export const useFormatter = (): UseFormatter => {
  /** Formats to time from now - eg. 1 month ago
   * @param {String} dateStr A string representing a date
   */
  const getFriendlyDate = (dateStr: string) => {
    dayjs.extend(relativeTime);

    const formatted = dayjs(dateStr).fromNow();

    return formatted;
  };

  /** Returns a string with the first character in uppercase and the rest in lowercase
   * @param {String} str The string we need converted
   */
  const upperFirst = (str: string) => {
    return str
      .toLowerCase()
      .split('')
      .map((char, i) => (i === 0 ? char.toUpperCase() : char))
      .join('');
  };

  return { getFriendlyDate, upperFirst };
};
