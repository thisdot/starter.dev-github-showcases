import * as fromProfile from './profile.actions';

describe('fetchProfiles', () => {
  it('should return an action', () => {
    expect(fromProfile.fetchProfile({ username: 'test' }).type).toBe(
      '[Profile] Fetch Profile',
    );
  });
});
