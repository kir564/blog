import { ROLE } from '../constans';
import { removeComment } from './session';

export const createSession = (role_id) => {
  const session = {
    logout() {
      Object.keys(session).forEach((key) => delete session[key]);
    },
  };

  switch (role_id) {
    case ROLE.ADMIN: {
      session.removeComment = removeComment;
      break;
    }
    case ROLE.MODERATOR: {
      session.removeComment = removeComment;
      break;
    }
    case ROLE.READER: {
      break;
    }

    default:
    // ничего не делать
  }

  return session;
};
