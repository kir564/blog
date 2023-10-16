import styled from 'styled-components';

const IconContainer = ({ className, id }) => {
  return (
    <div className={className}>
      <span className={`fa ${id}`} aria-hidden="true"></span>
    </div>
  );
};

export const Icon = styled(IconContainer)`
  font-size: ${({ size = '20px' }) => size};
  margin: ${({ margin = '0' }) => margin};
`;
