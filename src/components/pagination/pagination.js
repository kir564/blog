import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '../button/button';
// import { PAGINATION_LIMIT } from '../../constans';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 2rem;
  gap: 10px;
`;

const PageNumber = styled.div`
  border: 1px solid #000;
  padding: 0 0.5rem;
  font-weight: 500;
`;

const CurrentPage = styled(PageNumber)`
  color: red;
`;

export const Pagination = ({ setPage, page, lastPage }) => {
  return (
    <Wrapper>
      <Button onClick={() => setPage(1)} width="150px">
        В начало
      </Button>
      {/* <Button
        width="150px"
        onClick={() => {
          if (page !== 1) {
            setPage((prev) => prev - 1);
          }
        }}
      >
        Предыдущая
      </Button> */}
      {page > 1 && (
        <PageNumber onClick={() => setPage(page - 1)}>{page - 1}</PageNumber>
      )}
      <CurrentPage>{page}</CurrentPage>
      <PageNumber onClick={() => setPage(page + 1)}>{page + 1}</PageNumber>
      <div>...</div>
      <PageNumber>{lastPage}</PageNumber>
      {/* <Button width="150px" onClick={() => setPage((prev) => prev + 1)}>
        Следующая
      </Button> */}
      <Button width="150px" onClick={() => setPage(1)}>
        В конец
      </Button>
    </Wrapper>
  );
};

Pagination.propTypes = {
  setPage: PropTypes.func.isRequired,
  page: PropTypes.PropTypes.number.isRequired,
  lastPage: PropTypes.PropTypes.number.isRequired,
};
