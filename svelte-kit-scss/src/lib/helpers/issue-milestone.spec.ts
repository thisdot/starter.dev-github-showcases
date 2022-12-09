import { describe, it } from 'vitest';
import { remapIssueMilestone } from './issue-milestone';
import {
  GithubIssueMilestoneState,
  IssueMilestoneState,
  type GithubIssueMilestone,
} from '$lib/interfaces';

const MOCK_MILESTONE: GithubIssueMilestone = {
  id: 1002604,
  number: 1,
  state: GithubIssueMilestoneState.Open,
  title: 'v1.0',
};

const MOCK_MILESTONE_INVALID_STATE: GithubIssueMilestone = {
  ...MOCK_MILESTONE,
  state: 'any_other_state' as GithubIssueMilestoneState,
};

describe('.remapIssueMilestone', () => {
  describe('when called', () => {
    describe('with valid argument', () => {
      it('returns expected result', () => {
        const result = remapIssueMilestone(MOCK_MILESTONE);

        expect(result).toBeTruthy();
        expect(result.id).toEqual(MOCK_MILESTONE.id);
        expect(result.number).toEqual(MOCK_MILESTONE.number);
        expect(result.state).toEqual(IssueMilestoneState.Open);
        expect(result.title).toEqual(MOCK_MILESTONE.title);
      });
    });

    describe('with argument having invalid state', () => {
      it('throws error', () => {
        expect(() => remapIssueMilestone(MOCK_MILESTONE_INVALID_STATE)).toThrowError(
          /^Invalid Milestone State:/
        );
      });
    });
  });
});
