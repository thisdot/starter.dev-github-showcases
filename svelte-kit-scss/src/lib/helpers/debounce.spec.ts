import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { debounce } from './debounce';

describe('debounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should call passed in function with object arg', () => {
    const mockEvent = new CustomEvent('mock_type');
    const mockFn = vi.fn();
    const handleChange = debounce(mockFn, 2000);
    handleChange(mockEvent);
    vi.runAllTimers();
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith(mockEvent);
  });
});
