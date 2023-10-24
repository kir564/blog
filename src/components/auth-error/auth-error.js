import styled from 'styled-components';

const ErrorMessage = styled.div`
  background-color: #ff6347;
  padding: 5px;
  margin-top: 5px;
`;

export const AuthError = ({ children }) => {
  return <ErrorMessage>{children}</ErrorMessage>;
};
