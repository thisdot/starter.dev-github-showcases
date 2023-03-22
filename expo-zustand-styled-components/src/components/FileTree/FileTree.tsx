import { useEffect } from 'react';
import { View } from 'react-native';
import { Link } from '@react-navigation/native';

import { useRepoInfoStore } from '../../hooks/stores';
import getRepoTree from '../../services/get-repo-tree';

import { Cell, LinkText, Containter } from './FileTree.styles';
import { colors } from '../../utils/style-variables';
import { FolderIcon, DocumentIcon } from '../Icons';

const FileTree = () => {
  const { path, owner, name, tree, branch } = useRepoInfoStore();

  const basePath = () => `/${owner}/${name}`;

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
        <Link to={`${basePath()}/tree/${branch}/${path}`}>
          <LinkText>..</LinkText>
        </Link>
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
            <Link to={`${basePath()}/${item.type}/${branch}/${item.path}`}>{item.name}</Link>
          </View>
        </Cell>
      ))}
    </Containter>
  );
};

export default FileTree;
