import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 260px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & form {
    display: flex;
    flex-direction: column;
  }
`;

export const AuthContainer = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
