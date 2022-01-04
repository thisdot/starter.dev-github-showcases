import { ApolloQueryResult } from '@apollo/client/core';
import { Language } from 'src/app/file-viewer/utils/language';

export interface RepoFileData {
  repository: RepoFileDetails;
}

export interface RepoFileDetails {
  id: string;
  blob: FileBlob;
}

export interface FileBlob {
  byteSize: number;
  text: string;
}

export interface RepoFileVars {
  owner: string;
  name: string;
  expression: string;
}

export interface FileDetails extends ApolloQueryResult<RepoFileData> {
  byteSize: number;
  extension: string;
  language: Language;
  text: string;
  lines: number;
}
