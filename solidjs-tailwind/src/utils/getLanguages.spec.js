import { describe, expect, test } from 'vitest';
import { getLanguages } from './getLanguages';
import { MOCK_REPOS } from './fixtures/mocks';

const INITIAL_VALUE = 'All';

describe('getLanguages helper', () => {
  let languages = getLanguages(MOCK_REPOS);

  test('should return a unique list of languages', () => {
    expect(languages.length).toBe(4);
  });

  test('should return "All" in the first position', () => {
    expect(languages[0]).toBe(INITIAL_VALUE);
  });

  test('should return at least one item', () => {
    const emptyLanguages = getLanguages([]);
    expect(emptyLanguages.length).toBe(1);
  });
});
