import { FlatList, Text, View } from 'react-native';

import { CodeBlock, LineNumber } from './FileText.styles';
import { TableRow } from '../FileViewer.styles';

import { fontFamily } from '../font';

const FileText = (props: { text: string }) => {
  return (
    <CodeBlock
      horizontal
      contentContainerStyle={{
        paddingVertical: 4,
        paddingHorizontal: 32,
      }}>
      <FlatList
        data={props.text?.split('\n')}
        ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
        renderItem={({ item, index }) => (
          <TableRow>
            <LineNumber style={{ fontFamily }}>{index + 1}</LineNumber>
            <Text style={{ fontFamily }}>{item}</Text>
          </TableRow>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </CodeBlock>
  );
};

export default FileText;
