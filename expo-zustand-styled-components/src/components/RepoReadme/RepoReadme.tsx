import { useEffect } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import Markdown from '@ronradtke/react-native-markdown-display';

import { ReadmeListIcon } from '../Icons/ReadmeListIcon';
import { ReadmeHeader, ReadmeDiv, ReadmeContainer, ReadmeText } from './RepoReadme.styles';

import { useRepoInfoStore } from '../../hooks/stores';
import getRepoReadMe from '../../services/get-repo-readme';
import { colors } from '../../utils/style-variables';

const RepoReadme = () => {
  const { width } = useWindowDimensions();
  const { owner, name, readMe, branch } = useRepoInfoStore();

  useEffect(() => {
    getRepoReadMe({
      owner,
      name,
      expression: 'HEAD:README.md',
    });
  }, [owner, name, branch]);

  return readMe ? (
    <ReadmeContainer>
      <ReadmeHeader>
        <ReadmeListIcon />
        <ReadmeText>README.md</ReadmeText>
      </ReadmeHeader>
      <ReadmeDiv screenWidth={width}>
        <Markdown style={styles}>{readMe}</Markdown>
      </ReadmeDiv>
    </ReadmeContainer>
  ) : null;
};

export default RepoReadme;

const styles = StyleSheet.create({
  heading1: {
    fontSize: 36,
    fontWeight: '500',
  },
  heading3: {
    fontSize: 20,
    fontWeight: '500',
  },
  table: {
    borderWidth: 0,
    marginBottom: 20,
  },
  th: {
    flex: 1,
    paddingVertical: 10,
  },
  tr: {
    borderBottomWidth: 1,
    borderColor: colors.gray300,
    flexDirection: 'row',
  },
  paragraph: {
    lineHeight: 24,
  },
  bullet_list: {
    lineHeight: 24,
    marginBottom: 5,
  },
  link: {
    color: colors.blue600,
    textDecorationLine: 'none',
  },
});
