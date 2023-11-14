import { useState } from 'react';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
import { Icon } from '../../../../components';
// import { saveUserRoleAction } from '../../../../actions';
import { HeaderUsersRow } from '../header-users-row/header-users-row';

import styled from 'styled-components';
// import { server } from '../../../../bff';
import { useServerRequest } from '../../../../hooks';
import { PROP_TYPE } from '../../../../constans';

const UserRow = styled.div`
  display: flex;
  margin-top: 5px;
  align-items: center;
  gap: 5px;
  /* border: 1px solid black; */
`;
const UserInfo = styled(HeaderUsersRow)`
  & .role {
    display: flex;
    gap: 5px;
    /* margin-right: 10px; */
  }
  border: 1px solid black;
  padding: 5px;
  /* width: 570px; */
`;

// const NotSaveRole = styled.div`
//   width: 18px;
//   height: 24px;
// `;

export const User = ({ className, user, roles, removeUser }) => {
  const { login, registredAt, roleId, id } = user;

  const [initialRoleId, setInitialRoleId] = useState(roleId);
  const [selectedRoleId, setSelectedRoleId] = useState(roleId);

  const requestServer = useServerRequest();

  const isSaveRole = initialRoleId === selectedRoleId;

  const onRoleChange = ({ target }) => {
    setSelectedRoleId(Number(target.value));
  };

  const onRoleSave = () => {
    requestServer('updateUserRole', id, selectedRoleId).then(({ res }) => {
      if (res) {
        setInitialRoleId(selectedRoleId);
      }
    });
  };

  return (
    <>
      <UserRow>
        <UserInfo className={className}>
          <div className="table-elem login">{login}</div>
          <div className="table-elem registered-at">{registredAt}</div>
          <div className="table-elem role">
            <select defaultValue={selectedRoleId} onChange={onRoleChange}>
              {roles.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
            <Icon id="fa-floppy-o" disabled={isSaveRole} onClick={onRoleSave} />
          </div>
        </UserInfo>
        <Icon id="fa-trash-o" onClick={removeUser} />
      </UserRow>
    </>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    registredAt: PropTypes.string.isRequired,
    roleId: PROP_TYPE.ROLE.isRequired,
    id: PropTypes.string.isRequired,
  }),
  roles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  removeUser: PropTypes.func,
};
