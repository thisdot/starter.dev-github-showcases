import { describe, it } from 'vitest';
import { remapIssueLabel } from './issue-label';
import { expectCamelFromSnakeCasePropertiesMapping } from './test-utils';

const MOCK_ISSUE_LABEL = {
  id: 418327088,
  node_id: 'MDU6TGFiZWw0MTgzMjcwODg=',
  url: 'https://api.github.com/repos/octocat/linguist/labels/enhancement',
  name: 'enhancement',
  color: '84b6eb',
  default: true,
  description: 'New feature or request.',
  score: 1,
};

describe('.remapIssueLabel', () => {
  describe('when called', () => {
    it('returns expected result', () => {
      const input = MOCK_ISSUE_LABEL;

      const output = remapIssueLabel(input);

      expectCamelFromSnakeCasePropertiesMapping(output, input);
    });
  });
});
