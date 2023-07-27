import { Text, View, FlatList, Platform } from 'react-native';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwlLight';

import { Container, CountColumn } from './FileCode.styles';
import { TableRow } from '../FileViewer.styles';
import { fontFamily } from '../font';

interface FileCodeProps {
  text: string;
  language: Language;
}

const FileCode = ({ text, language }: FileCodeProps) => {
  return (
    <Highlight {...defaultProps} theme={theme} code={text} language={language}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <Container
          horizontal
          contentContainerStyle={[
            style,
            { flexGrow: 1, paddingVertical: 4, paddingHorizontal: 32 },
          ]}>
          <FlatList
            data={tokens}
            ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
            renderItem={({ item, index }) => {
              const { style } = getLineProps({ line: item, key: index });
              return (
                <TableRow style={style}>
                  <CountColumn style={{ fontFamily }}>{index + 1}</CountColumn>
                  <TableRow>
                    {item.map((token, key) => {
                      const { style } = getTokenProps({ token, key });
                      return (
                        <Text
                          key={key}
                          style={[
                            style,
                            { fontFamily, display: Platform.OS === 'web' ? 'tabel-cell' : 'flex' },
                          ]}>
                          {token.content}
                        </Text>
                      );
                    })}
                  </TableRow>
                </TableRow>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </Container>
      )}
    </Highlight>
  );
};

export default FileCode;
