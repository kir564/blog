import { getUser } from './get-user';
import { addUser } from './add-user';
import { createSession } from './create-session';
import { sessions } from './sessions';

export const server = {
  async logout(session) {
    sessions.remove(session);
  },

  async autorize(authLogin, authPassword) {
    const user = await getUser(authLogin);

    if (!user) {
      return {
        error: 'Такой пользователь не найден',
        res: null,
      };
    }

    if (authPassword !== user.password) {
      return {
        error: 'Неверный пароль',
        res: null,
      };
    }

    return {
      error: null,
      res: {
        session: sessions.create(user),
        id: user.id,
        login: user.login,
        roleId: user.role_id,
      },
    };
  },

  async register(regLogin, regPassword) {
    const existsUser = await getUser(regLogin);

    if (existsUser) {
      return {
        error: 'Такой логин уже занят',
        res: null,
      };
    }

    const user = await addUser(regLogin, regPassword);
    // const user = await getUser(regLogin);

    return {
      error: null,
      res: {
        session: sessions.create(user),
        id: user.id,
        login: user.login,
        roleId: user.role_id,
      },
    };
  },
};
