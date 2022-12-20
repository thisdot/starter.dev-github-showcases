import { component$ } from '@builder.io/qwik';
import * as styles from './file-viewer.classNames';

export default component$(({ text }: { text: string }) => {
  const lines = text.split('\n');

  return (
    <pre data-testid="text-block" class={styles.codeBlock}>
      {lines.map((line, i) => (
        <div key={i} class="table-row">
          <span class={styles.lineNumber}>{i + 1}</span>
          <span class="table-cell">{line}</span>
        </div>
      ))}
    </pre>
  );
});
