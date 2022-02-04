import * as fromNav from './nav.reducer';
import { selectNavState } from './nav.selectors';

describe('Nav Selectors', () => {
  it('should select the feature state', () => {
    const result = selectNavState({
      [fromNav.navFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
