import styled from 'styled-components'
import Link from 'next/link'

const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const PaginationLink = styled.a`
    padding: 4px 8px;
    margin: 20px 10px;
    color: white;
    background-color: ${(props) => (!props.disabled ? 'orange' : 'lightgrey')};
    cursor: ${(props) => (!props.disabled ? 'pointer' : 'not-allowed')};
    text-decoration: none;
    border-radius: 5px;
`;

function Pagination({currentPage, hasMore}) {
  return (
    <PaginationContainer>
        <Link
            href={`?page=${parseInt(currentPage) - 1}`}
        >
            <PaginationLink disabled={currentPage <= 1}>Previous</PaginationLink>
        </Link>
        <Link
            href={`?page=${parseInt(currentPage) + 1}`}
        >
            <PaginationLink disabled={!hasMore}>Next</PaginationLink>
        </Link>
    </PaginationContainer>
  )
}

export default Pagination