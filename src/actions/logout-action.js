import { ACTION_TYPE } from '.';
import { server } from '../bff';

export const logoutAction = (session) => {
  server.logout(session);

  return { type: ACTION_TYPE.LOG_OUT };
};
