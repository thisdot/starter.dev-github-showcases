import FileViewer from '../../../../components/file-viewer';
import {
  RepoMain,
  RepoContainer,
  RepoGrid,
} from '../../../../components/layouts/RepoLayoutPage';

export default function RepoBranchBlobPath() {
  return (
    <>
      <RepoContainer>
        <RepoGrid>
          <RepoMain>
            <FileViewer />
          </RepoMain>
        </RepoGrid>
      </RepoContainer>
    </>
  );
}
