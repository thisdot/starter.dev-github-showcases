import { PaginationContainer } from './Pagination.styles';

export default function Pagination() {
	return (
		<PaginationContainer>
			<div className="group">
				<button className="button" disabled>
					Previous
				</button>
				<button className="button">Next</button>
			</div>
		</PaginationContainer>
	);
}
