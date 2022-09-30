import FileViewerView from './FileViewer.view';
import { Code } from 'react-content-loader';
import { useRepo } from '../../context/RepoContext';
import { useRepoBlob } from '../../hooks/repo-blob/use-repo-blob';
import { mapExtensionToLanguage } from './mapExtensionToLanguage';

function FileViewer() {
	const { path, isRepoLoading } = useRepo();
	const { code, file, error, isLoading } = useRepoBlob();

	// wait on base repo data to display file
	if (isRepoLoading) {
		return null;
	}

	if (isLoading) {
		return (
			<div>
				<Code width={400} height={100} viewBox="-20 0 400 80" />
			</div>
		);
	}

	// errors are handled at the repo page level

	if (error || !file) {
		const err = error ? error : new Error('Repository path not found');
		throw err;
	}

	const extension = path.split('.').pop();
	const language = mapExtensionToLanguage(extension);
	const text = code ? code : '';
	const lines = text.split('\n').length;

	return (
		<FileViewerView
			text={text}
			byteSize={file?.size}
			lines={lines}
			language={language}
		/>
	);
}

export default FileViewer;
