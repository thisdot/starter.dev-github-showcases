import RepoAbout from '../../../../components/repo-about/RepoAbout';
import Readme from '../../../../components/readme/Readme';
import FileExplorer from '../../../../components/file-explorer/FileExplorer';
import {
	RepoMain,
	RepoAside,
	RepoContainer,
	RepoGrid,
} from '../../../../components/layouts/RepoLayoutPage';
import { useRepo } from '../../../../context/RepoContext';
import { useRepoExplorer } from '../../../../hooks/repo-explorer/use-repo-explorer';

export default function RepoBranchRoot() {
	const { owner, name, branch, path, basePath, data } = useRepo();
	const { files, directories } = useRepoExplorer();

	return (
		<>
			<RepoContainer>
				<RepoGrid>
					<RepoMain>
						<FileExplorer
							branch={branch}
							path={path}
							basePath={basePath}
							directories={directories}
							files={files}
						/>
						<Readme branch={branch} username={owner} repository={name} />
					</RepoMain>
					<RepoAside>
						<RepoAbout
							topics={data?.topics}
							description={data?.description}
							homepageUrl={data?.homepageUrl}
						/>
					</RepoAside>
				</RepoGrid>
			</RepoContainer>
		</>
	);
}
