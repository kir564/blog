import { getUser, addUser } from '../api';
import { sessions } from '../sessions';

export const register = async (regLogin, regPassword) => {
  const existsUser = await getUser(regLogin);

  if (existsUser) {
    return {
      error: 'Такой логин уже занят',
      res: null,
    };
  }

  const user = await addUser(regLogin, regPassword);

  return {
    error: null,
    res: {
      session: sessions.create(user),
      id: user.id,
      login: user.login,
      roleId: user.role_id,
    },
  };
};
