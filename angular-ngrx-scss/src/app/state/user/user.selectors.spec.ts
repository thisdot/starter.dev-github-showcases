import * as fromNav from './user.reducer';
import { selectNavState } from './user.selectors';

describe('Nav Selectors', () => {
  it('should select the feature state', () => {
    const result = selectNavState({
      [fromNav.navFeatureKey]: {},
    });

    expect(result).toEqual({});
  });
});
