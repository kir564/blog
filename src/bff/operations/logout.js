import { sessions } from '../sessions';

export const logout = (hash) => {
  sessions.remove(hash);
};
