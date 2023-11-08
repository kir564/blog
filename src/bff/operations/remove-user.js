import { ROLE } from '../constans';
import { sessions } from '../sessions';
import { deleteUser } from '../api';

export const removeUser = async (hash, userId) => {
  const accessRoles = [ROLE.ADMIN];

  const accsess = await sessions.access(hash, accessRoles);

  if (!accsess) {
    return {
      error: 'Доступ запрещён',
      res: null,
    };
  }

  await deleteUser(userId);

  return {
    error: null,
    res: true,
  };
};
