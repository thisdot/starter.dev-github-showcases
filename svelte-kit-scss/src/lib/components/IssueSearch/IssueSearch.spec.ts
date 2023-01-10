import { describe, it } from 'vitest';
import IssueSearchList from './IssueSearchList.svelte';

describe('IssueSearch', () => {
  describe('List issues', () => {
    it.todo('should list open issues');
    it.todo('should list closed issues');
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
    it.todo('should contain a title that is clickable');
    it.todo('should contain an issue number');
    it.todo('should contain the comments count');
    it.todo('should contain labels if any');
    it.todo('should contain a date of creation');
    it.todo('should contain the name of the person that created it');
    it.todo('should have the name of the person that created it be clickable');
  });
});
