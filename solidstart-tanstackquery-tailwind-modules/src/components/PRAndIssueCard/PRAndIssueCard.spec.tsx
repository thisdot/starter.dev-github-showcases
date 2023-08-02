import { Router } from '@solidjs/router';
import { render } from 'solid-testing-library';
import { beforeEach, describe, expect } from 'vitest';
import PRAndIssueCard from './PRAndIssueCard';
import { testData } from './data';

describe('PRAndIssuesCard', () => {
  let wrapper: any;
  beforeEach(async () => {
    wrapper = render(() => (
      <Router>
        <PRAndIssueCard {...testData} />
      </Router>
    ));
  });
  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should contain card title and author name', async () => {
    const cardTitle = await wrapper.getByText(testData.title);
    expect(cardTitle).toBeVisible();
    const authorName = await wrapper.getByText(testData.authorName);
    expect(authorName).toBeVisible();
  });
});
