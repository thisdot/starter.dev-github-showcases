import { useEffect } from 'react';
import { View } from 'react-native';

import { useRepoInfoStore } from '../../hooks/stores';
import getRepoTree from '../../services/get-repo-tree';

import { Cell, LinkText, Containter } from './FileTree.styles';
import { colors } from '../../utils/style-variables';
import { FolderIcon, DocumentIcon } from '../Icons';
import LinkButton from '../LinkButton/LinkButton';

const FileTree = (props: { path?: string; branch?: string }) => {
  const { owner, name, tree, branch } = useRepoInfoStore();

  const basePath = () => `/${owner}/${name}`;
  const _branch = props.branch || branch;

  useEffect(() => {
    getRepoTree({
      owner,
      name,
      expression: `${_branch}:${props.path || ''}`,
    });
  }, [owner, name, props]);

  return (
    <Containter>
      {props.path && props.path !== '' ? (
        <Cell>
          <LinkButton to={`${basePath()}/tree/${_branch}/${props.path}`} style={{ marginLeft: 10 }}>
            <LinkText>..</LinkText>
          </LinkButton>
        </Cell>
      ) : null}
      {tree?.map((item) => (
        <Cell key={item.name}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ marginLeft: 10, marginRight: 2 }}>
              {item.type === 'tree' ? (
                <FolderIcon color={colors.blue400} width={20} height={20} />
              ) : (
                <DocumentIcon color={colors.gray500} width={20} height={20} />
              )}
            </View>
            <LinkButton to={`${basePath()}/${item.type}/${_branch}/${item.path}`}>
              <LinkText>{item.name}</LinkText>
            </LinkButton>
          </View>
        </Cell>
      ))}
    </Containter>
  );
};

export default FileTree;
