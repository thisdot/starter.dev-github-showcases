import React from 'react';
import {
  OrgImage,
  Organizations,
  Organisation,
  Heading,
  OrganizationsWrapper,
} from './OrgList.styles';

interface Organization {
  organizations: {
    avatarUrl: string;
    login: string;
  }[];
}

const OrgList = ({ organizations }: Organization) => (
  <OrganizationsWrapper>
    <Heading>Organizations</Heading>
    <Organizations>
      {organizations.map(({ avatarUrl, login }) => (
        <Organisation key={login}>
          <OrgImage source={{ uri: avatarUrl }} />
        </Organisation>
      ))}
    </Organizations>
  </OrganizationsWrapper>
);

export default OrgList;
