import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Icon, Button } from '../../../../components';
import {
  selectUserLogin,
  selectUserRole,
  selectUserSession,
} from '../../../../selectors';
import { logoutAction } from '../../../../actions';
import { ROLE } from '../../../../constans';
import { checkAccess } from '../../../../utils';

import styled from 'styled-components';

const RightAligned = styled.div`
  display: flex;
  gap: 10px;
`;

const Login = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const ControlPanelContainer = ({ className }) => {
  const roleId = useSelector(selectUserRole);
  const login = useSelector(selectUserLogin);
  const session = useSelector(selectUserSession);
  // const { roleId, login, session } = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goPrevPage = () => {
    navigate(-1);
  };

  const logout = () => {
    dispatch(logoutAction(session));
    sessionStorage.removeItem('userData');
    // navigate('/');
  };

  const isAdmin = checkAccess([ROLE.ADMIN], roleId);

  return (
    <div className={className}>
      <RightAligned>
        {roleId !== ROLE.GUEST ? (
          <>
            <Login>{login}</Login>
            {/* <Link to="/"> */}
            <Icon id="fa-sign-out" onClick={logout} />
            {/* </Link> */}
          </>
        ) : (
          <Button width="auto">
            <Link to="/login">Войти</Link>
          </Button>
        )}
      </RightAligned>

      <RightAligned>
        <Icon id="fa-backward" onClick={goPrevPage} />
        {isAdmin && (
          <>
            <Link to="/post">
              <Icon id="fa-file-text-o" />
            </Link>
            <Link to="/users">
              <Icon id="fa-users" />
            </Link>
          </>
        )}
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
