import { GithubRepoContentsItemType } from '$lib/constants/github';
import { describe, it, expect } from 'vitest';
import type { FileExplorerFolderContentItem } from '../models';
import { render, screen } from '@testing-library/svelte';
import FileExplorerContainer from './FileExplorerContainer.svelte';

describe('FileExplorerContainer', () => {
  describe('handle parent file navigation', () => {
    it('should show a link to the parent when parentHref is provided', () => {
      const parentHref = '/parent';
      render(FileExplorerContainer, { parentHref });

      const parentLink = screen.queryByTestId('file-list-parent-link') as HTMLAnchorElement;
      expect(parentLink.href).toContain('/parent');
    });
    it('should show NOT show a link to the parent when parentHref is NOT provided', () => {
      const parentHref = undefined;
      render(FileExplorerContainer, { parentHref });

      const parentLink = screen.queryByTestId('file-list-parent-link');
      expect(parentLink).toBeNull();
    });
  });

  describe('contents should be appropriately setup', () => {
    describe('handle contents when they are passed in', () => {
      const contents: FileExplorerFolderContentItem[] = [
        {
          name: 'file1',
          type: GithubRepoContentsItemType.File,
          href: '/file1.ts',
        },
        {
          name: 'file2',
          type: GithubRepoContentsItemType.File,
          href: '/file2.md',
        },
        {
          name: 'dir1',
          type: GithubRepoContentsItemType.Dir,
          href: '/dir1',
        },
        {
          name: 'dir2',
          type: GithubRepoContentsItemType.Dir,
          href: '/dir2',
        },
      ];
      beforeEach(() => {
        render(FileExplorerContainer, { contents });
      });

      const getContentList = () => screen.queryAllByTestId('file-list-item');

      it('should show the contents when contents are provided', () => {
        const contentList = getContentList();
        expect(contentList.length).toBe(4);
      });

      it.each(getContentList())('each item should contain a link', (contentItem) => {
        const link = contentItem.querySelector('a');
        expect(link).not.toBeNull();
      });
    });

    describe('handle contents when nothing is passed in', () => {
      it('should show an empty container without errors when contents are empty', () => {
        const contents: FileExplorerFolderContentItem[] = [];
        render(FileExplorerContainer, { contents });
      });
    });
  });
});
