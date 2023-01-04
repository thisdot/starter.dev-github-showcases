import { beforeEach, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import FileViewer from './FileViewer.svelte';
import { MOCK_FILE_VIEWER_CONTENTS } from '$lib/helpers/mocks/file-viewer';

const fileContents = MOCK_FILE_VIEWER_CONTENTS;

describe('FileViewer', () => {
  beforeEach(() => {
    render(FileViewer, {
      fileContents: MOCK_FILE_VIEWER_CONTENTS,
    });
  });

  it.each([
    ['file viewer line count', `41 lines`],
    ['file viewer byte size', `${fileContents.size} Bytes`],
  ])('should render: %s', (testId, expectedValue) => {
    const element = screen.getByTestId(testId);
    const expectedText = String(expectedValue);
    expect(element.innerHTML).toEqual(expectedText);
  });
});
