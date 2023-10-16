import { Icon } from '../../../../components';
import styled from 'styled-components';

const LargeText = styled.div`
  font-size: 48px;
  font-weight: 600;
  line-height: 48px;
  margin-top: 10px;
`;

const SmallText = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const LogoContainer = ({ className }) => {
  return (
    <div className={className}>
      <Icon id="fa-code" size="70px" />
      <div>
        <LargeText>Блог</LargeText>
        <SmallText>веб-разработчика</SmallText>
      </div>
    </div>
  );
};

export const Logo = styled(LogoContainer)`
  display: flex;
  gap: 10px;
`;
