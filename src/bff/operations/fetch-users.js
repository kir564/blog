import { getUsers } from '../api';
import { ROLE } from '../constans';
import { sessions } from '../sessions';

export const fetchUsers = async (hash) => {
  const accessRoles = [ROLE.ADMIN];

  const accsess = await sessions.access(hash, accessRoles);

  if (!accsess) {
    return {
      error: 'Доступ запрещён',
      res: null,
    };
  }

  const users = await getUsers();

  return {
    error: null,
    res: users,
  };
};
