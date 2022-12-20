import { component$ } from '@builder.io/qwik';
import type { Language } from 'prism-react-renderer';
import { FileCode } from '~/integrations/react/file-code';
import FileText from './text';
import * as styles from './file-viewer.classNames';

interface FileViewerViewProps {
  text: string;
  byteSize: number;
  lines: number;
  language?: Language;
}

export const FileViewerView = component$(({ text, byteSize, lines, language }: FileViewerViewProps) => {
  return (
    <div class={styles.container}>
      <div class={styles.fileHeader}>
        <span data-testid="file viewer line count" class={styles.fileHeaderLines}>
          {lines} lines
        </span>
        <span data-testid="file viewer byte size" class={styles.fileHeaderBytes}>
          {byteSize} Bytes
        </span>
      </div>
      {language ? <FileCode text={text} language={language} /> : <FileText text={text} />}
    </div>
  );
});
