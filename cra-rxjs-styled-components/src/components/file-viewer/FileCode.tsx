import type { Language } from 'prism-react-renderer';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwlLight';
import { CodeBlock, LineNumber, LineText, TableRow } from './FileViewer.styles';

interface FileCodeProps {
  text: string;
  language: Language;
}

function FileCode({ text, language }: FileCodeProps) {
  return (
    // @ts-ignore
    <Highlight {...defaultProps} theme={theme} code={text} language={language}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <CodeBlock data-testid="code-block" style={style}>
          {tokens.map((line, i) => {
            const { className: defaultClassName, ...lineProps } = getLineProps({
              line,
              key: i,
            });
            return (
              <TableRow key={i} {...lineProps}>
                <LineNumber>{i + 1}</LineNumber>
                <LineText>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </LineText>
              </TableRow>
            );
          })}
        </CodeBlock>
      )}
    </Highlight>
  );
}

export default FileCode;
