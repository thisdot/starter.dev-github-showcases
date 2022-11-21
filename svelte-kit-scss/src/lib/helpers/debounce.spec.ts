import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { debounce } from './debounce';

const obj = {
  changeFunc: (...args: unknown[]) => args,
};

describe('debounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should call passed in function with no args', () => {
    const spy = vi.spyOn(obj, 'changeFunc');
    const handleChange = debounce(obj.changeFunc, 2000);
    handleChange();
    vi.runAllTimers();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith();
  });

  it('should call passed in function with object arg', () => {
    const spy = vi.spyOn(obj, 'changeFunc');
    const handleChange = debounce(obj.changeFunc, 2000);
    handleChange({ search: 'test string' });
    vi.runAllTimers();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith({ search: 'test string' });
  });

  it('should call passed in function with string arg', () => {
    const spy = vi.spyOn(obj, 'changeFunc');
    const handleChange = debounce(obj.changeFunc, 2000);
    handleChange('test string');
    vi.runAllTimers();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('test string');
  });
});
