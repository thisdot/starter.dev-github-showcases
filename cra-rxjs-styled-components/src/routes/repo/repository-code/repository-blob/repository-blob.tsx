import FileViewer from '../../../../components/file-viewer/FileViewer.data';
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
