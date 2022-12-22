import { describe, it } from 'vitest';
import {
  MOCK_REPOSITORY_CONTENT_TREE_DIRECTORY,
  MOCK_REPOSITORY_CONTENT_TREE_FILE,
} from './mocks/repository-contents';
import { composeDirHref, remapFileExplorerFolderContentsItem } from './repository-contents';

describe('repository-contents', () => {
  describe('.composeDirHref', () => {
    describe('when called', () => {
      it.each([
        [
          'with non-root path and non-default branch',
          'mock_path_segment',
          'mock_username',
          'mock_repo',
          'mock_non_default_branch',
          'mock_default_branch',
          '/mock_username/mock_repo/tree/mock_non_default_branch/mock_path_segment',
        ],
        [
          'with root path and non-default branch',
          '',
          'mock_username',
          'mock_repo',
          'mock_non_default_branch',
          'mock_default_branch',
          '/mock_username/mock_repo/tree/mock_non_default_branch',
        ],
        [
          'with non-root path and default branch',
          'mock_path_segment',
          'mock_username',
          'mock_repo',
          'mock_default_branch',
          'mock_default_branch',
          '/mock_username/mock_repo/tree/mock_default_branch/mock_path_segment',
        ],
        [
          'with root path and default branch',
          '',
          'mock_username',
          'mock_repo',
          'mock_default_branch',
          'mock_default_branch',
          '/mock_username/mock_repo',
        ],
      ])('%s', (_, path, username, repo, branch, defaultBranch, expectedResult) => {
        const actualResult = composeDirHref(path, username, repo, branch, defaultBranch);
        expect(actualResult).toEqual(expectedResult);
      });
    });
  });

  describe('.remapFileExplorerFolderContentsItem', () => {
    describe('when called', () => {
      const MOCK_USERNAME = 'MOCK_USERNAME';
      const MOCK_REPO = 'MOCK_REPO';
      const MOCK_NON_DEFAULT_BRANCH = 'MOCK_NON_DEFAULT_BRANCH';
      const MOCK_DEFAULT_BRANCH = 'MOCK_BRANCH';
      describe.each([
        [
          'for directory',
          MOCK_REPOSITORY_CONTENT_TREE_DIRECTORY,
          composeDirHref(
            MOCK_REPOSITORY_CONTENT_TREE_DIRECTORY.path,
            MOCK_USERNAME,
            MOCK_REPO,
            MOCK_NON_DEFAULT_BRANCH,
            MOCK_DEFAULT_BRANCH
          ),
        ],
        [
          'for file',
          MOCK_REPOSITORY_CONTENT_TREE_FILE,
          `/${MOCK_USERNAME}/${MOCK_REPO}/blob/${MOCK_NON_DEFAULT_BRANCH}/${MOCK_REPOSITORY_CONTENT_TREE_FILE.path}`,
        ],
      ])('%s', (_, mockItem, expectedHref) => {
        it('returns expected result', () => {
          const result = remapFileExplorerFolderContentsItem(
            mockItem,
            MOCK_USERNAME,
            MOCK_REPO,
            MOCK_NON_DEFAULT_BRANCH,
            MOCK_DEFAULT_BRANCH
          );
          expect(result).toBeTruthy();
          expect(result.name).toEqual(mockItem.name);
          expect(result.type).toEqual(mockItem.type);
          expect(result.href).toEqual(expectedHref);
        });
      });
    });
  });
});
