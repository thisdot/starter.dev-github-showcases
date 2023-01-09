import { For } from 'solid-js';
import Highlight, { defaultProps } from 'prism-react-renderer';
import cn from 'classnames';
import styles from './FileViewer.module.css';

const FileCode = (props) => {
  return (
    <Highlight {...defaultProps} code={props.text} language={props.language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          data-testid="code-block"
          class={cn(styles.codeBlock, className)}
          style={style}
        >
          <For each={tokens}>
            {(line, i) => {
              const { className: defaultClassName, ...lineProps } =
                getLineProps({
                  line,
                  key: i,
                });
              return (
                <div class={cn('table-row', defaultClassName)} {...lineProps}>
                  <span class={styles.lineNumber}>{i() + 1}</span>
                  <span class="table-cell">
                    <For each={line}>
                      {(token, key) => (
                        <span {...getTokenProps({ token, key })} />
                      )}
                    </For>
                  </span>
                </div>
              );
            }}
          </For>
        </pre>
      )}
    </Highlight>
  );
};

export default FileCode;
