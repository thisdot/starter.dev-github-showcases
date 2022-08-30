import FileViewer from '../../../../components/file-viewer';
import {
  RepoContainer,
  RepoCenterWrapper,
} from '../../../../components/layouts/RepoLayoutPage';

export default function RepoBranchBlobPath() {
  return (
    <>
      <RepoContainer>
        <RepoCenterWrapper>
          <FileViewer />
        </RepoCenterWrapper>
      </RepoContainer>
    </>
  );
}
