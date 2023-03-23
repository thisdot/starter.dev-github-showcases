import { useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { useRepoInfoStore } from '../../hooks/stores';
import getRepoTree from '../../services/get-repo-tree';

import { Cell, LinkText, Containter } from './FileTree.styles';
import { colors } from '../../utils/style-variables';
import { FolderIcon, DocumentIcon } from '../Icons';

const FileTree = () => {
  const { path, owner, name, tree, branch } = useRepoInfoStore();

  useEffect(() => {
    getRepoTree({
      owner,
      name,
      expression: `${branch}:${path || ''}`,
    });
  }, [owner, name, branch, path]);

  return (
    <Containter>
      {path && path !== '' ? (
        <Cell>
          <TouchableOpacity onPress={() => useRepoInfoStore.setState({ path: undefined })}>
            <LinkText>..</LinkText>
          </TouchableOpacity>
        </Cell>
      ) : null}
      {tree?.map((item) => (
        <Cell key={item.name}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ marginLeft: 10 }}>
              {item.type === 'tree' ? (
                <FolderIcon color={colors.blue400} width={20} height={20} />
              ) : (
                <DocumentIcon color={colors.gray500} width={20} height={20} />
              )}
            </View>
            <TouchableOpacity
              onPress={() => {
                useRepoInfoStore.setState({ path: item.path, isBlob: item.type !== 'tree' });
              }}>
              <LinkText>{item.name}</LinkText>
            </TouchableOpacity>
          </View>
        </Cell>
      ))}
    </Containter>
  );
};

export default FileTree;