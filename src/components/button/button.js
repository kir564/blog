import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  background-color: #eee;
  border: 1px solid #000;
  font-size: ${({ size }) => size};
  padding: 0;
  width: ${({ width = '100%' }) => width};
  height: ${({ height }) => height};

  &:disabled {
    cursor: default;
  }

  & a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 3px 10px;
  }
`;

export const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
