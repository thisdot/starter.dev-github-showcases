import { CodeBlock, LineNumber, LineText, TableRow } from './FileViewer.styles';

interface FileTextProps {
	text: string;
}

function FileText({ text }: FileTextProps) {
	const lines = text.split('\n');
	return (
		<CodeBlock data-testid="text-block">
			{lines.map((line, i) => (
				<TableRow key={i}>
					<LineNumber>{i + 1}</LineNumber>
					<LineText>{line}</LineText>
				</TableRow>
			))}
		</CodeBlock>
	);
}

export default FileText;
