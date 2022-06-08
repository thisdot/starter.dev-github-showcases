import { PaginationContainer } from './Pagination.styles';

export default function Pagination() {
  return (
    <PaginationContainer>
      <span className="prev">Previous</span>
      <span className="next">Next</span>
    </PaginationContainer>
  );
}
