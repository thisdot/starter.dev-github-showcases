import * as fromNav from './user.actions';

describe('loadNavs', () => {
  it('should return an action', () => {
    expect(fromNav.loadNavs().type).toBe('[Nav] Load Navs');
  });
});
