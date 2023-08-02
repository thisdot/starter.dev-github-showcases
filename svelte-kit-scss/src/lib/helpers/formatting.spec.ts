import { describe, it } from 'vitest';
import { relativeTimeFmt } from './formatting';

describe('.relativeTimeFmt', () => {
  describe('when called for ISO date of', () => {
    let now = new Date();
    const secondAgo = new Date(now.setSeconds(now.getSeconds() - 1)).toISOString();
    now = new Date();
    const secondsAgo = new Date(now.setSeconds(now.getSeconds() - 2)).toISOString();
    now = new Date();
    const minuteAgo = new Date(now.setMinutes(now.getMinutes() - 1)).toISOString();
    now = new Date();
    const minutesAgo = new Date(now.setMinutes(now.getMinutes() - 2)).toISOString();
    now = new Date();
    const hourAgo = new Date(now.setHours(now.getHours() - 1)).toISOString();
    now = new Date();
    const hoursAgo = new Date(now.setHours(now.getHours() - 2)).toISOString();
    now = new Date();
    const dayAgo = new Date(now.setDate(now.getDate() - 1)).toISOString();
    now = new Date();
    const daysAgo = new Date(now.setDate(now.getDate() - 2)).toISOString();
    now = new Date();
    const weekAgo = new Date(now.setDate(now.getDate() - 1 * 7)).toISOString();
    now = new Date();
    const weeksAgo = new Date(now.setDate(now.getDate() - 2 * 7)).toISOString();
    now = new Date();
    const monthAgo = new Date(now.setMonth(now.getMonth() - 1)).toISOString();
    now = new Date();
    const monthsAgo = new Date(now.setMonth(now.getMonth() - 2)).toISOString();
    now = new Date();
    const yearAgo = new Date(now.setFullYear(now.getFullYear() - 1)).toISOString();
    now = new Date();
    const yearsAgo = new Date(now.setFullYear(now.getFullYear() - 2)).toISOString();

    const CASES: [string, string][] = [
      ['1 second ago', secondAgo],
      ['2 seconds ago', secondsAgo],
      ['1 minute ago', minuteAgo],
      ['2 minutes ago', minutesAgo],
      ['1 hour ago', hourAgo],
      ['2 hours ago', hoursAgo],
      ['1 day ago', dayAgo],
      ['2 days ago', daysAgo],
      ['1 week ago', weekAgo],
      ['2 weeks ago', weeksAgo],
      ['1 month ago', monthAgo],
      ['2 months ago', monthsAgo],
      ['1 year ago', yearAgo],
      ['2 years ago', yearsAgo],
    ];

    it.each(CASES)('%s', (text, datIsoString) => {
      const output = relativeTimeFmt(datIsoString);
      expect(output).toStrictEqual(text);
    });

    it('[empty]', () => {
      const output = relativeTimeFmt('');
      expect(output).toStrictEqual('');
    });

    it('[Invalid ISO String]', () => {
      const output = relativeTimeFmt('[Invalid ISO String]');
      expect(output).toStrictEqual('');
    });
  });
});
