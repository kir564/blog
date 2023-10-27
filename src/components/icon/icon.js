import styled from 'styled-components';

const IconContainer = ({ className, id, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <span className={`fa ${id}`} aria-hidden="true"></span>
    </div>
  );
};

export const Icon = styled(IconContainer)`
  font-size: ${({ size }) => size || '20px'};
  color: ${({ disabled }) => (disabled ? '#ccc' : '')};
  /* width: ${({ width }) => width || '20px'}; */
  /* height: ${({ height }) => height || '20px'}; */
  margin: ${({ margin }) => margin || '0'};
  cursor: pointer;
`;
