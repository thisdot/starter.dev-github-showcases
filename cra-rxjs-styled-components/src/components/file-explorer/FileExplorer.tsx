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

type Props = {
  branch: string;
  dirNames: string[];
  fileNames: string[];
};

export default function FileExplorer({ branch, dirNames, fileNames }: Props) {
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
        {dirNames.map((folder, index) => (
          <FileExplorerCell key={index}>
            <FileExplorerInnerCell>
              <FileExplorerDirContainer>
                <DirectoryIcon />
              </FileExplorerDirContainer>
              <FileExplorerLink>{folder}</FileExplorerLink>
            </FileExplorerInnerCell>
          </FileExplorerCell>
        ))}
        {fileNames.map((file, index) => (
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
