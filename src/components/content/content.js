import { H2 } from '../h2/h2';
import styled from 'styled-components';

const Div = styled.div`
  text-align: center;
`;

export const Content = ({ children, error }) => {
  return error ? (
    <>
      <H2>Ошибка</H2>
      <Div>{error}</Div>
    </>
  ) : (
    children
  );
};
