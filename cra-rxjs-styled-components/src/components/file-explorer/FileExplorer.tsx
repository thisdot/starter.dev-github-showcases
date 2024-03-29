import {
	FileExplorerWrapper,
	FileExplorerButtonNav,
	FileExplorerButton,
	FileExplorerIconDiv,
	FileExplorerButtonCaretIcon,
	FileExplorerContainer,
	FileExplorerCell,
	FileExplorerInnerCell,
	FileExplorerDirContainer,
	FileExplorerLink,
	FileExplorerFileContainer,
} from './FileExplorer.styles';

import { ForkIcon } from '../icons/ForkIcon';
import { DirectoryIcon } from '../icons/DirectoryIcon';
import { FileIcon } from '../icons/FileIcon';
import { FileItem } from '../../types/types';
import { LoadingBulletList } from '../Loading';

type Props = {
	branch: string;
	path: string;
	basePath: string;
	directories: FileItem[];
	files: FileItem[];
	isRepoLoading?: boolean;
};

export default function FileExplorer({
	branch,
	directories,
	basePath,
	path,
	files,
	isRepoLoading,
}: Props) {
	const removeLastPathPart = (path: string) => {
		const pathParts = path.split('/');
		return pathParts.slice(0, pathParts.length - 1).join('/');
	};

	const getUrl = (path: string, type: string) => {
		if (path === '') {
			return `${basePath}`;
		}
		return `${basePath}/${type}/${branch}/${path}`;
	};
	if (isRepoLoading) {
		return (
			<FileExplorerContainer>
				<LoadingBulletList />
			</FileExplorerContainer>
		);
	}
	return (
		<FileExplorerWrapper>
			<FileExplorerButtonNav>
				<FileExplorerButton>
					<FileExplorerIconDiv>
						<ForkIcon />
					</FileExplorerIconDiv>
					{branch}
					<FileExplorerButtonCaretIcon>▼</FileExplorerButtonCaretIcon>
				</FileExplorerButton>
			</FileExplorerButtonNav>

			<FileExplorerContainer>
				{path !== '' ? (
					<FileExplorerCell>
						<FileExplorerLink href={getUrl(removeLastPathPart(path), 'tree')}>
							..
						</FileExplorerLink>
					</FileExplorerCell>
				) : null}
				{directories.map((folder, index) => (
					<FileExplorerCell key={index}>
						<FileExplorerInnerCell>
							<FileExplorerDirContainer>
								<DirectoryIcon />
							</FileExplorerDirContainer>
							<FileExplorerLink href={getUrl(folder.path, 'tree')}>
								{folder.name}
							</FileExplorerLink>
						</FileExplorerInnerCell>
					</FileExplorerCell>
				))}
				{files.map((file, index) => (
					<FileExplorerCell key={index}>
						<FileExplorerInnerCell>
							<FileExplorerFileContainer>
								<FileIcon />
							</FileExplorerFileContainer>
							<FileExplorerLink href={getUrl(file.path, 'blob')}>
								{file.name}
							</FileExplorerLink>
						</FileExplorerInnerCell>
					</FileExplorerCell>
				))}
			</FileExplorerContainer>
		</FileExplorerWrapper>
	);
}
