import { makeVar } from '@apollo/client';
import { defaultSortBy } from '@/components/SearchFilter/data';

export const sortBy = makeVar(defaultSortBy);
