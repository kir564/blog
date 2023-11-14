import React from 'react';
import { PROP_TYPE } from '../../constans';
import styled from 'styled-components';
import { H2 } from '../h2/h2';

const Div = styled.div`
  text-align: center;
`;

export const Error = ({ error }) => {
  return (
    <>
      <H2>Ошибка</H2>
      <Div>{error}</Div>
    </>
  );
};

Error.propTypes = {
  error: PROP_TYPE.ERROR,
};
