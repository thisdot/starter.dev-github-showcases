import type { Language } from 'prism-react-renderer';
import FileCode from './FileCode';
import FileText from './FileText';
import styles from './FileViewer.module.css';

interface FileViewerViewProps {
  text: string;
  byteSize: number;
  lines: number;
  language?: Language;
}

function FileViewerView({
  text,
  byteSize,
  lines,
  language,
}: FileViewerViewProps) {
  return (
    <div className={styles.container}>
      <div className={styles.fileHeader}>
        <span
          data-testid="file viewer line count"
          className={styles.fileHeaderLines}
        >
          {lines} lines
        </span>
        <span
          data-testid="file viewer byte size"
          className={styles.fileHeaderBytes}
        >
          {byteSize} Bytes
        </span>
      </div>
      {language ? (
        <FileCode text={text} language={language} />
      ) : (
        <FileText text={text} />
      )}
    </div>
  );
}

export default FileViewerView;
