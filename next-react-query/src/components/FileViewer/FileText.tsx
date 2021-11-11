import styles from './FileViewer.module.css';

interface FileTextProps {
  text: string;
}

function FileText({ text }: FileTextProps) {
  const lines = text.split('\n');
  return (
    <pre data-testid="text-block" className={styles.codeBlock}>
      {lines.map((line, i) => (
        <div key={i} className="table-row">
          <span className={styles.lineNumber}>{i + 1}</span>
          <span className="table-cell">{line}</span>
        </div>
      ))}
    </pre>
  );
}

export default FileText;
