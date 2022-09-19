import { GenerateUrlWithProtocolPipe } from './generate-url-with-protocol.pipe';

describe('GenerateUrlWithProtocolPipe', () => {
  it('create an instance', () => {
    const pipe = new GenerateUrlWithProtocolPipe();
    expect(pipe).toBeTruthy();
  });

  it('should append https to url with no protocol', () => {
    const pipe = new GenerateUrlWithProtocolPipe();
    expect(pipe.transform('test.com')).toBe('https://test.com');
  });

  it('should return url untouched if it has protocol appended', () => {
    const pipe = new GenerateUrlWithProtocolPipe();
    expect(pipe.transform('https://test.com')).toBe('https://test.com');
  });

  it('should not attempt to change url with http to https', () => {
    const pipe = new GenerateUrlWithProtocolPipe();
    expect(pipe.transform('http://test.com')).toBe('http://test.com');
  });
});
