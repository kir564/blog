import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '../../../../components';
import styled from 'styled-components';

const RightAligned = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled(Link)`
  text-decoration: none;
  color: #000;
  background-color: #eee;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 0 10px;
`;

const ControlPanelContainer = ({ className }) => {
  const navigate = useNavigate();
  const goPrevPage = () => {
    navigate(-1);
  };
  return (
    <div className={className}>
      <RightAligned>
        <Button to="/login">Войти</Button>
      </RightAligned>
      <RightAligned>
        <Icon id="fa-backward" onClick={goPrevPage} />
        <Link to="/post">
          <Icon id="fa-file-text-o" />
        </Link>
        <Link to="/users">
          <Icon id="fa-users" />
        </Link>
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
