import ClosedPRIcon from '../icons/ClosedPRIcon';
import MergedPRIcon from '../icons/MergedPRIcon';
import OpenPRIcon from '../icons/OpenPRIcon';
import React from 'react';
import { State } from './types';

export const getPRIcon = (state: State) => {
	switch (state) {
		case 'merged':
			return <MergedPRIcon />;
		case 'closed':
			return <ClosedPRIcon />;
		case 'open':
		default:
			return <OpenPRIcon />;
	}
};
