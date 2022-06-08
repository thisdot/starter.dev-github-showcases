import { useParams } from 'react-router-dom';
import IssueCtrl from '../../components/repo-issues/Issues';
import { useRepositoryIssues } from '../../hooks/repository-issues/use-repository-issues.ts';

export default function RepoIssues() {
  const params = useParams();
  const issues = useRepositoryIssues(params.username!, params.repo!);
  return <IssueCtrl issues={issues!} />;
}
