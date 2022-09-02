import type { Language } from 'prism-react-renderer';
import FileCode from './FileCode';
import FileText from './FileText';
import {
	FileHeader,
	FileHeaderBytes,
	FileHeaderLines,
	FileViewContainer,
} from './FileViewer.styles';

interface FileViewerViewProps {
	text: string;
	byteSize: number;
	lines: number;
	language?: Language;
}

function FileViewerView({
	text,
	byteSize,
	lines,
	language,
}: FileViewerViewProps) {
	return (
		<FileViewContainer>
			<FileHeader>
				<FileHeaderLines>{lines} lines</FileHeaderLines>
				<FileHeaderBytes>{byteSize} Bytes</FileHeaderBytes>
			</FileHeader>
			{language ? (
				<FileCode text={text} language={language} />
			) : (
				<FileText text={text} />
			)}
		</FileViewContainer>
	);
}

export default FileViewerView;
