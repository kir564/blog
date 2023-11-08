import { ACTION_TYPE } from '../actions';

const initialAppState = {
  wasLogout: false,
  modal: {
    isOpen: false,
    text: '',
    onConfirm: () => {},
    onCancel: () => {},
  },
};

export const appReducer = (state = initialAppState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPE.LOG_OUT:
      return {
        ...state,
        wasLogout: !state.wasLogout,
      };

    case ACTION_TYPE.OPEN_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          ...payload,
        },
      };

    case ACTION_TYPE.CLOSE_MODAL:
      return {
        ...state,
        modal: initialAppState.modal,
      };

    default:
      return state;
  }
};
