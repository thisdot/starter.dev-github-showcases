import { describe, it, expect } from 'vitest';
import IssueSearchList from './IssueSearchList.svelte';
import { render, screen } from '@testing-library/svelte';
import { IssueState } from '$lib/interfaces';
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

  describe('Filter issues', () => {
    it.todo('should display labels to filter by whenever available');
    it.todo('should display milestones to filter by whenever available');
    it.todo('should filter issues by label');
    it.todo('should filter issues by milestone');
  });

  describe('Sort issues', () => {
    it.todo('should sort issues by newest');
    it.todo('should sort issues by oldest');
    it.todo('should sort issues by most commented');
    it.todo('should sort issues by most recently updated');
    it.todo('should sort issues by least recently updated');
    it.todo('should sort issues by best match');
  });

  describe('Each issue should contain relevant information', () => {
    it.each(screen.queryAllByTestId('issue-title'))(
      'should contain a title that is clickable',
      (title: HTMLElement) => {
        expect(title).toHaveProperty('href');
      }
    );
    it.todo('should contain an issue number');

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

    it.todo('should contain a date of creation');
    it.todo('should contain the name of the person that created it');
    it.todo('should have the name of the person that created it be clickable');
  });
});
