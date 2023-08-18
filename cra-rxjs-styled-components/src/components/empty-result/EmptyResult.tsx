import IssueIcon from '../icons/IssueIcon';
import PullRequestIcon from '../icons/PullRequestIcon';
import { Container, Header } from './EmptyResult.styles';

interface IssuesEmptyProps {
	icon?: 'pr' | 'issue';
	text: string;
}
const EmptyResult = ({ icon, text }: IssuesEmptyProps) => {
	return (
		<Container data-testid="issues-empty">
			{icon && icon === 'pr' ? (
				<PullRequestIcon height={32} width={32} />
			) : (
				<IssueIcon height={32} width={32} />
			)}
			<Header>{text}</Header>
		</Container>
	);
};

export default EmptyResult;
