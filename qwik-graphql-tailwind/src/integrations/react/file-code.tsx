/** @jsxImportSource react */

import { qwikify$ } from '@builder.io/qwik-react';
import type { Language } from 'prism-react-renderer';
import cn from 'classnames';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwlLight/index.cjs';

interface FileCodeProps {
  text: string;
  language: Language;
}

export const FileCode = qwikify$(({ text, language }: FileCodeProps) => {
  return (
    <Highlight {...defaultProps} theme={theme} code={text} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={cn('text-left text-xs py-1 px-8 overflow-auto bg-white border-spacing-2', className)}
          style={style}
        >
          {tokens.map((line, i) => {
            const { className: defaultClassName, ...lineProps } = getLineProps({
              line,
              key: i,
            });
            return (
              <div className={cn('table-row', defaultClassName)} key={i} {...lineProps}>
                <span className="table-cell text-right pr-4 select-none text-gray-500">{i + 1}</span>
                <span className="table-cell">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </span>
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
});
