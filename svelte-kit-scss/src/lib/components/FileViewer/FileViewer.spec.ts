import { beforeEach, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import FileViewer from './FileViewer.svelte';
import { MOCK_FILE_VIEWER_CONTENTS } from '$lib/helpers/mocks/file-viewer';
import type { SvelteComponentDev } from 'svelte/internal';

const fileContents = MOCK_FILE_VIEWER_CONTENTS;

describe('FileViewer', () => {
  let FileViewerComponent: SvelteComponentDev;

  beforeEach(() => {
    FileViewerComponent = render(FileViewer, {
      fileContents: MOCK_FILE_VIEWER_CONTENTS,
    });
  });

  const lines = fileContents.content.split(`\n`);

  it.each([
    ['file viewer line count', `${lines.length} lines`],
    ['file viewer byte size', `${fileContents.size} Bytes`],
  ])('should render: %s', (testId, expectedValue) => {
    const element = screen.getByTestId(testId);
    const expectedText = String(expectedValue);
    expect(element.textContent).toEqual(expectedText);
  });

  it('should render first and last line correctly', () => {
    const firstLine = FileViewerComponent.container.getElementsByClassName('line')[0].textContent;
    const lastLine =
      FileViewerComponent.container.getElementsByClassName('line')[lines.length - 1].textContent;

    expect(firstLine).toEqual(`1 ${lines[0]} `);
    expect(lastLine).toEqual(`${lines.length} ${lines[lines.length - 1]} `);
  });
});
