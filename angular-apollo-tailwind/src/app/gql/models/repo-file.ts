import { Language } from '@prism';

export interface FileDetails {
  byteSize: string | number;
  extension: string;
  language: Language;
  text?: string | null;
  lines: number;
}
