import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 260px;

  & form {
    display: flex;
    flex-direction: column;
  }
`;

export const AuthContainer = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
