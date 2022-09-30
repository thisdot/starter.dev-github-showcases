import IssueCtrl from '../../components/repo-issues/Issues/Issues';
import { useRepo } from '../../context/RepoContext';
import { useRepositoryIssues } from '../../hooks/repository-issues/use-repository-issues.ts';

export default function RepoIssues() {
	const repo = useRepo();
	const issues = useRepositoryIssues(repo.owner, repo.name, 'issue');
	return <IssueCtrl issues={issues} />;
}
