import { CloseIcon } from '../icons';
import {
	ClearButtonContainer,
	ClearButtonText,
} from './ClearFilterAndSortButtonText.styles';

type ClearFilterAndSortButtonTextProps = {
	text: string;
	resetFilter?: () => void;
	variant: 'profile' | 'repo';
};

const ClearFilterAndSortButtonText = ({
	text,
	resetFilter,
	variant,
}: ClearFilterAndSortButtonTextProps) => {
	return (
		<ClearButtonContainer onClick={resetFilter} variant={variant}>
			<ClearButtonText>
				<CloseIcon />
			</ClearButtonText>
			{text}
		</ClearButtonContainer>
	);
};

export default ClearFilterAndSortButtonText;
