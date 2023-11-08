import { forwardRef } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 5px;
  margin-bottom: 5px;
  border: 1px solid #000;
  font-size: 18px;
  width: ${({ width = '100%' }) => width};
  height: 33px;
`;

export const Input = (props) => {
  return <StyledInput {...props} />;
};
