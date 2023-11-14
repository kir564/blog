import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledH2 = styled.h2`
  margin: ${({ margin }) => margin || '0 0 20px'};
  color: ${({ color }) => color};
  text-align: center;
`;

export const H2 = ({ children, ...props }) => {
  return <StyledH2 {...props}>{children}</StyledH2>;
};

H2.propTypes = {
  children: PropTypes.node.isRequired,
};
