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

import { ForkIcon, DirectoryIcon, FileIcon } from '../icons/index';
import { FileItem } from '../../types/types';

type Props = {
  branch: string;
  path: string;
  basePath: string;
  directories: FileItem[];
  files: FileItem[];
};

export default function FileExplorer({
  branch,
  directories,
  basePath,
  path,
  files,
}: Props) {
  const removeLastPathPart = (path: string) => {
    const pathParts = path.split('/');
    return pathParts.slice(0, pathParts.length - 1).join('/');
  };

  const getUrl = (path: string) => {
    if (path === '') {
      return `${basePath}`;
    }
    return `${basePath}/tree/${branch}/${path}`;
  };
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
            <FileExplorerLink href={getUrl(removeLastPathPart(path))}>
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
              <FileExplorerLink href={getUrl(folder.path)}>
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
              <FileExplorerLink>{file.name}</FileExplorerLink>
            </FileExplorerInnerCell>
          </FileExplorerCell>
        ))}
      </FileExplorerContainer>
    </FileExplorerWrapper>
  );
}
