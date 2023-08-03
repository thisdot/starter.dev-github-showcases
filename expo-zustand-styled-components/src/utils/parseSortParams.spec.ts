import { parseSortParams } from './parseSortParams';
import { OrderField, OrderDirection, SORT_OPTIONS } from './constants';

describe('.parseSortParams', () => {
  it('returns the correct sort value given a sort option', () => {
    const options = SORT_OPTIONS;
    const value = SORT_OPTIONS[`${OrderField.CreatedAt}^${OrderDirection.Desc}`];
    const position = 0;
    const expected = 'CREATED_AT';

    expect(parseSortParams(options, value, position)).toEqual(expected);
  });

  it('returns the correct sort value given another sort option', () => {
    const options = SORT_OPTIONS;
    const value = SORT_OPTIONS[`${OrderField.Comments}^${OrderDirection.Asc}`];
    const position = 0;
    const expected = 'COMMENTS';

    expect(parseSortParams(options, value, position)).toEqual(expected);
  });

  it('throws an error if the provided position is not 0 or 1', () => {
    const options = SORT_OPTIONS;
    const value = SORT_OPTIONS[`${OrderField.Comments}^${OrderDirection.Asc}`];
    const position = 2;

    expect(() => parseSortParams(options, value, position)).toThrowError(
      `Invalid position value: ${position}`
    );
  });

  it('throws an error if the provided value is not in the options object', () => {
    const options = SORT_OPTIONS;
    const value = 'InvalidValue';
    const position = 0;

    expect(() => parseSortParams(options, value, position)).toThrowError(
      `Invalid sort option: ${value}`
    );
  });
});
