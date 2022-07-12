import { RelativeTimePipe } from './relative-time.pipe';

const MINUTE = 60,
  HOUR = MINUTE * 60,
  DAY = HOUR * 24,
  WEEK = DAY * 7,
  MONTH = DAY * 30,
  YEAR = DAY * 365;

describe('RelativeTimePipe', () => {
  let pipe: RelativeTimePipe;

  beforeEach(() => {
    pipe = new RelativeTimePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should report seconds if <60 seconds', () => {
    expect(pipe.transform(mockDatetime(59))).toBe('59 seconds ago');
  });

  it('should report minutes if <60 minutes', () => {
    expect(pipe.transform(mockDatetime(59 * MINUTE))).toBe('59 minutes ago');
  });

  it('should report hours if <24 hours', () => {
    expect(pipe.transform(mockDatetime(23 * HOUR))).toBe('23 hours ago');
  });

  it('should report days if <7 days', () => {
    expect(pipe.transform(mockDatetime(6 * DAY))).toBe('6 days ago');
  });

  it('should report weeks if <4 weeks', () => {
    expect(pipe.transform(mockDatetime(3 * WEEK))).toBe('3 weeks ago');
  });

  it('should report months if <12 months', () => {
    expect(pipe.transform(mockDatetime(11 * MONTH))).toBe('11 months ago');
  });

  it('should report years if >=12 months (non-plural)', () => {
    expect(pipe.transform(mockDatetime(1 * YEAR))).toBe('1 year ago');
  });

  it('should report years if >=12 months (plural)', () => {
    expect(pipe.transform(mockDatetime(2 * YEAR))).toBe('2 years ago');
  });
});

function mockDatetime(seconds: number): string {
  const now = new Date().getTime();
  return new Date(+now - seconds * 1000).toISOString();
}
