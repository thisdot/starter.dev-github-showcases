import * as fromProfile from './profile.actions';

describe('fetchProfiles', () => {
  it('should return an action', () => {
    expect(fromProfile.fetchProfiles().type).toBe('[Profile] Fetch Profiles');
  });
});
