import { ApolloQueryResult } from '@apollo/client/core';

export interface OrgProfileData {
  organization: Org;
}

export interface OrgProfileVars {
  orgname: string;
}

export interface Org {
  id: string;
  avatarUrl: string;
  name: string;
}

export interface OrgProfileDetails
  extends Partial<Org>,
    ApolloQueryResult<OrgProfileData> {}
