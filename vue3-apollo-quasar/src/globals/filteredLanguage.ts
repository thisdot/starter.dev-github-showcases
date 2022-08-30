import { makeVar } from '@apollo/client';
import { defaultLanguage } from '@/components/SearchFilter/data';

export const filteredLanguage = makeVar(defaultLanguage);
