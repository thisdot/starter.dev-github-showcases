import { For } from 'solid-js';
import styles from './FileViewer.module.css';

const FileCode = (props) => {
  return (
    <pre data-testid="text-block" class={styles.codeBlock}>
      <For each={props.text?.split('\n')}>
        {(line, i) => (
          <div class="table-row">
            <span class={styles.lineNumber}>{i() + 1}</span>
            <span class="table-cell">{line}</span>
          </div>
        )}
      </For>
    </pre>
  );
};

export default FileCode;
