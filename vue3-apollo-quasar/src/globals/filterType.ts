import { makeVar } from '@apollo/client';
import { defaultFilterType } from '@/components/SearchFilter/data';

export const filterType = makeVar(defaultFilterType);
