import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderUsersRowContainer = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export const HeaderUsersRow = styled(HeaderUsersRowContainer)`
  display: grid;
  grid-template-columns: 25% 250px auto;
  width: 570px;
  & .table-elem {
    padding: 0 0 0 10px;
  }
`;

HeaderUsersRow.propTypes = {
  children: PropTypes.node,
};
