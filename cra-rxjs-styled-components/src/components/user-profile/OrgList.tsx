import { IOrganization } from '../../context/UserProvider';
import {
	ContainerWrapper,
	Heading,
	OrgListContainer,
	Organisation,
	OrgImage,
} from './OrgList.styles';

interface OrgListProps {
	organizations: IOrganization[];
}

function OrgList({ organizations }: OrgListProps) {
	return (
		<ContainerWrapper>
			<Heading>Organizations</Heading>
			<OrgListContainer>
				{organizations.map(({ avatar_url, login }) => (
					<Organisation key={login}>
						<OrgImage src={avatar_url} alt="Organization" />
					</Organisation>
				))}
			</OrgListContainer>
		</ContainerWrapper>
	);
}

export default OrgList;
