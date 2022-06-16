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
  directories: Array<FileItem>;
  files: Array<FileItem>;
};

export default function FileExplorer({ branch, directories, files }: Props) {
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
        {directories.map((folder, index) => (
          <FileExplorerCell key={index}>
            <FileExplorerInnerCell>
              <FileExplorerDirContainer>
                <DirectoryIcon />
              </FileExplorerDirContainer>
              <FileExplorerLink>{folder.name}</FileExplorerLink>
            </FileExplorerInnerCell>
          </FileExplorerCell>
        ))}
        {files.map((file, index) => (
          <FileExplorerCell key={index}>
            <FileExplorerInnerCell>
              <FileExplorerFileContainer>
                <FileIcon />
              </FileExplorerFileContainer>
              <FileExplorerLink>{file}</FileExplorerLink>
            </FileExplorerInnerCell>
          </FileExplorerCell>
        ))}
      </FileExplorerContainer>
    </FileExplorerWrapper>
  );
}
