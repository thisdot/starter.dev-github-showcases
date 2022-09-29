import { Plugin } from '@nuxt/types';
import { formatDistance, Locale } from 'date-fns';

declare module 'vue/types/vue' {
  // this.$formatter inside Vue components
  interface Vue {
    $formatter: {
      userDate(
        date: Date | number | string,
        dateToCompare: Date | number,
        options?: {
          includeSeconds?: boolean;
          addSuffix?: boolean;
          locale?: Locale;
        }
      ): string;
    };
  }
}

const isValidDate = (date: Date | number): boolean =>
  !(date === undefined || date === null);

const formatter: Plugin = (_, inject) => {
  // Format date to user readable string
  const userDate = (
    date: Date | number | string,
    dateToCompare: Date | number,
    options?: {
      includeSeconds?: boolean;
      addSuffix?: boolean;
      locale?: Locale;
    }
  ) => {
    const dateToFormat = typeof date === 'string' ? new Date(date) : date;
    if (!isValidDate(dateToFormat) || !isValidDate(dateToCompare)) {
      return '';
    }

    return formatDistance(dateToFormat, dateToCompare, options);
  };

  inject('formatter', {
    userDate,
  });
};

export default formatter;
