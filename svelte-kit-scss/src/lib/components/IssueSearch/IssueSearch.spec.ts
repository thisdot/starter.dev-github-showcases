import { describe, it, expect } from 'vitest';
import IssueSearchList from './IssueSearchList.svelte';
import { render, screen } from '@testing-library/svelte';
import { MOCK_ISSUE_ARRAY } from '$lib/helpers/mocks/issues';

describe('IssueSearch', () => {
  beforeEach(() => {
    render(IssueSearchList, {
      items: MOCK_ISSUE_ARRAY,
    });
  });

  describe('List issues', () => {
    it('should list all issues', () => {
      const issues = screen.queryAllByTestId('issue-search-list-item');
      expect(issues.length).toBe(4);
    });
  });

  describe('Each issue should contain relevant information', () => {
    it.each(screen.queryAllByTestId('issue-title'))(
      'should contain a title that is clickable',
      (title: HTMLElement) => {
        expect(title).toHaveProperty('href');
      }
    );

    it('should contain an issue number', () => {
      const issueNumbers = screen
        .queryAllByTestId('issue-number')
        .map((number) => number.textContent)
        .filter(Boolean);

      expect(issueNumbers.length).toBe(4);
      expect(issueNumbers).toEqual(['#1', '#2', '#3', '#4']);
    });

    it('should contain the comments count', () => {
      const commentCounts = screen
        .queryAllByTestId('issue-comments-count')
        .map((comment) => comment.textContent)
        .filter(Boolean);

      expect(commentCounts.length).toBe(4);
      expect(commentCounts).toEqual(['5', '0', '0', '10']);
    });

    it('should contain labels if any', () => {
      const labels = screen.queryAllByTestId('issue-label');
      expect(labels.length).toBe(1);
    });

    it('should contain a date of creation', () => {
      const dates = screen.queryAllByTestId('issue-date');
      expect(dates.length).toBe(4);
    });

    describe('Handle name of the person that created issue', () => {
      it('should contain the name', () => {
        const names = screen.queryAllByTestId('issue-user-login');
        expect(names.length).toBe(4);
      });

      it.each(screen.queryAllByTestId('issue-user-login'))('should be clickable', (name) => {
        expect(name).toHaveProperty('href');
      });
    });
  });
});
