import Markdown from 'react-native-marked';
import { ReadmeListIcon } from '../Icons/ReadmeListIcon';
import {
  ReadmeHeader,
  ReadmeDiv,
  ReadmeContainer,
  ReadmeIconContainer,
  ReadmeText,
} from './RepoReadme.styles';

function RepoReadme({
  markdown,
}: {
  username: string;
  repository: string;
  branch: string;
  markdown: string;
}) {
  return (
    <ReadmeContainer>
      <ReadmeHeader>
        <ReadmeIconContainer>
          <ReadmeListIcon />
        </ReadmeIconContainer>
        <ReadmeText>README.md</ReadmeText>
      </ReadmeHeader>
      <ReadmeDiv>
        <Markdown
          value={markdown}
          flatListProps={{
            initialNumToRender: 8,
          }}
        />
      </ReadmeDiv>
    </ReadmeContainer>
  );
}

export default RepoReadme;
