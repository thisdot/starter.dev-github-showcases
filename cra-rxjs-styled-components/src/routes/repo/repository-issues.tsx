import useIssuesPRs from '../../hooks/useIssuesPRs';
import IssueCtrl from '../../components/repo-issues/Issues/Issues';

export default function RepoIssues() {
	const { open, closed } = useIssuesPRs({ searchType: 'issue', type: 'issues' });
	return <IssueCtrl issues={{ open, closed }} />;
}
