import { getRoles } from '../api';
import { ROLE } from '../constans';
import { sessions } from '../sessions';

export const fetchRoles = async (hash) => {
  const accessRoles = [ROLE.ADMIN];

  const accsess = await sessions.access(hash, accessRoles);

  if (!accsess) {
    return {
      error: 'Доступ запрещён',
      res: null,
    };
  }

  const roles = await getRoles();

  return {
    error: null,
    res: roles,
  };
};
