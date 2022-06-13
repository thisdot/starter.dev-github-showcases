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
  basePath: string;
  repoPath: string;
  branch: string;
  directories: Item[];
  files: Item[];
  ifTree?: boolean;
};

type Item = {
  name: string;
  path: string;
};

export default function FileExplorer({
  basePath,
  repoPath,
  branch,
  files,
  directories,
  ifTree = false,
}: Props) {
  const backPath = removeLastPathPart(repoPath);

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
        {ifTree && (
          <FileExplorerCell>
            <FileExplorerLink href={backPath}>..</FileExplorerLink>
          </FileExplorerCell>
        )}
        {directories?.map((folder, index) => (
          <FileExplorerCell key={index}>
            <FileExplorerInnerCell>
              <FileExplorerDirContainer>
                <DirectoryIcon />
              </FileExplorerDirContainer>
              <FileExplorerLink
                href={`/${basePath}/tree/${branch}/${folder.path}`}
              >
                {folder.name}
              </FileExplorerLink>
            </FileExplorerInnerCell>
          </FileExplorerCell>
        ))}
        {files?.map((file, index) => (
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

function removeLastPathPart(path: string) {
  const pathParts = path.split('/');
  return pathParts.slice(0, pathParts.length - 1).join('/');
}
