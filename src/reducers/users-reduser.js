import { ACTION_TYPE } from '../actions';

const usersInitialState = [];

export const usersReducer = (state = usersInitialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPE.SAVE_USER_ROLE:
      return [
        ...state,
        ...(state.find(({ id }) => id === payload.userId).roleId =
          payload.roleId),
      ];
    default:
      return state;
  }
};
