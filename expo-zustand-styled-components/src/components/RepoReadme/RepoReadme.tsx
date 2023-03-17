import { Platform } from 'react-native';
import { useEffect } from 'react';
import { ScrollView, useWindowDimensions, View } from 'react-native';

// FIXME: react-native-marked is does not show tables and html elements
import Markdown from 'react-native-marked';
// Makes use of system default theme, needs to be changed.

import { ReadmeListIcon } from '../Icons/ReadmeListIcon';

import { useRepoInfoStore } from '../../hooks/stores';
import getRepoReadMe from '../../services/get-repo-readme';

import { ReadmeHeader, ReadmeDiv, ReadmeContainer, ReadmeText } from './RepoReadme.styles';

const RepoReadme = () => {
  const { width } = useWindowDimensions();
  const { path, owner, name, readMe, branch } = useRepoInfoStore();

  useEffect(() => {
    getRepoReadMe({
      owner,
      name,
      expression: path ? `HEAD:${path}/README.md` : 'HEAD:README.md',
    });
  }, [owner, name, branch, path]);

  return readMe ? (
    <View>
      <ScrollView
        scrollEnabled={false}
        horizontal={Platform.OS !== 'web'}
        contentContainerStyle={{ flexShrink: 1 }}>
        <ReadmeContainer>
          <ReadmeHeader>
            <ReadmeListIcon />
            <ReadmeText>README.md</ReadmeText>
          </ReadmeHeader>
          <ReadmeDiv screenWidth={width}>
            <Markdown
              value={readMe}
              flatListProps={{
                initialNumToRender: 8,
              }}
            />
          </ReadmeDiv>
        </ReadmeContainer>
      </ScrollView>
    </View>
  ) : null;
};

export default RepoReadme;
