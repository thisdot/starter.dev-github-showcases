import { makeVar } from '@apollo/client';
import { defaultLanguageSort } from '@/components/SearchFilter/data';

export const filteredLanguage = makeVar(defaultLanguageSort);
