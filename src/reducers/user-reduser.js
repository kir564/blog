import { ROLE } from '../constans';
import { ACTION_TYPE } from '../actions';

const userInitialState = {
  session: null,
  id: null,
  login: null,
  roleId: ROLE.GUEST,
};

export const userReducer = (state = userInitialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPE.SET_USER:
      return {
        ...state,
        ...payload,
      };

    case ACTION_TYPE.LOG_OUT:
      return userInitialState;

    default:
      return state;
  }
};
