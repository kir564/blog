import { setUserRole } from '../api';
import { ROLE } from '../constans';
import { sessions } from '../sessions';

export const updateUserRole = async (hash, userId, newRoleId) => {
  const accessRoles = [ROLE.ADMIN];

  const accsess = await sessions.access(hash, accessRoles);

  if (!accsess) {
    return {
      error: 'Доступ запрещён',
      res: null,
    };
  }

  await setUserRole(userId, newRoleId);

  return {
    error: null,
    res: true,
  };
};
