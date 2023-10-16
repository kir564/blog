import { Icon } from '../../../../components';
import styled from 'styled-components';

const RightAligned = styled.div`
  display: flex;
  gap: 10px;
`;

const ControlPanelContainer = ({ className }) => {
  return (
    <div className={className}>
      <RightAligned>
        <button>Войти</button>
      </RightAligned>
      <RightAligned>
        <Icon id="fa-backward" />
        <Icon id="fa-file-text-o" />
        <Icon id="fa-users" />
      </RightAligned>
    </div>
  );
};

export const ControlPanel = styled(ControlPanelContainer)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
`;
