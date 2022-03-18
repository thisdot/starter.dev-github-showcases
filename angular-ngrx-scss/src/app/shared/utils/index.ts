const MINUTE = 60,
  HOUR = MINUTE * 60,
  DAY = HOUR * 24,
  WEEK = DAY * 7,
  MONTH = DAY * 30,
  YEAR = DAY * 365;

/**
 * Returns a human-readable relative time string. This function only handles
 * en locales correctly.
 *
 * Based on: https://gist.github.com/pomber/6195066a9258d1fb93bb59c206345b38?permalink_comment_id=3642456#gistcomment-3642456
 * @param dt ISO 8601 datetime string
 */
export function relativeTimeFmt(dt: string): string {
  const localizedDt = new Date(dt);
  const secondsAgo = Math.round(
    (+new Date().getTime() - localizedDt.getTime()) / 1000,
  );

  let divisor = null;
  let unit = null;

  if (secondsAgo < MINUTE) {
    return secondsAgo + ' seconds ago';
  } else if (secondsAgo < HOUR) {
    [divisor, unit] = [MINUTE, 'minute'];
  } else if (secondsAgo < DAY) {
    [divisor, unit] = [HOUR, 'hour'];
  } else if (secondsAgo < WEEK) {
    [divisor, unit] = [DAY, 'day'];
  } else if (secondsAgo < MONTH) {
    [divisor, unit] = [WEEK, 'week'];
  } else if (secondsAgo < YEAR) {
    [divisor, unit] = [MONTH, 'month'];
  } else if (secondsAgo > YEAR) {
    [divisor, unit] = [YEAR, 'year'];
  } else {
    throw new Error(`Unhandled case: ${secondsAgo} seconds`);
  }

  const count = Math.floor(secondsAgo / divisor);
  return `${count} ${unit}${count > 1 ? 's' : ''} ago`;
}
