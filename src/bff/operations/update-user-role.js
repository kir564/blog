import { setUserRole } from '../api';
import { ROLE } from '../constans';
import { sessions } from '../sessions';

export const updateUserRole = async (userSession, userId, newRoleId) => {
  const accessRoles = [ROLE.ADMIN];

  if (!sessions.access(userSession, accessRoles)) {
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
