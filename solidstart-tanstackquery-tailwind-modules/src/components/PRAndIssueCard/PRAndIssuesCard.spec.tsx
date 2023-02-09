import { Router } from '@solidjs/router';
import { render } from 'solid-testing-library';
import { beforeEach, describe } from 'vitest';
import PRAndIssuesCard from './PRAndIssueCard';
import { testData } from './data';

describe('PRAndIssuesCard', () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = render(() => (
      <Router>
        <PRAndIssuesCard {...testData} />
      </Router>
    ));
  });
  // it('should mount', () => {});
});
