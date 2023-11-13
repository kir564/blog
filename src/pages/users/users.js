import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { H2, PrivateContent } from '../../components';
import { User, HeaderUsersRow } from '../users/components';
import { checkAccess } from '../../utils';
import { useServerRequest } from '../../hooks';
import { selectUserRole } from '../../selectors';
import styled from 'styled-components';
import { ROLE } from '../../bff/constans';

const StyledUsers = styled.div`
  display: flex;
  flex-direction: column;
  width: 570px;
  margin: 50px auto;
`;

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [flagUpdateUsers, setFlagUpdateUsers] = useState(true);
  const userRole = useSelector(selectUserRole);

  const requestServer = useServerRequest();

  useEffect(() => {
    if (!checkAccess([ROLE.ADMIN], userRole)) {
      return;
    }

    Promise.all([
      requestServer('fetchRoles'),
      requestServer('fetchUsers'),
    ]).then(([responseRoles, responseUsers]) => {
      if (responseRoles.error || responseUsers.error) {
        setErrorMessage(responseRoles.error || responseUsers.error);
      } else {
        setRoles(responseRoles.res);
        setUsers(responseUsers.res);
      }
    });
  }, [requestServer, flagUpdateUsers]);

  const deleteUserfromUsers = (userId) => {
    requestServer('removeUser', userId).then(() => {
      setFlagUpdateUsers((prev) => !prev);
    });
  };

  return (
    <StyledUsers>
      <PrivateContent access={[ROLE.ADMIN]} serverError={errorMessage}>
        <H2>Пользователи</H2>
        <HeaderUsersRow>
          <div className="table-elem login">Логин</div>
          <div className="table-elem registered-at">Дата регистрации</div>
          <div className="table-elem role">Роль</div>
        </HeaderUsersRow>
        {users.map((user) => {
          return (
            <User
              removeUser={() => deleteUserfromUsers(user.id)}
              key={user.id}
              user={user}
              roles={roles.filter(({ id }) => id !== ROLE.GUEST)}
            />
          );
        })}
      </PrivateContent>
    </StyledUsers>
  );
};
