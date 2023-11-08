import { ACTION_TYPE } from './action-type';

export const openModalAction = ({ onConfirm, onCancel, text }) => ({
  type: ACTION_TYPE.OPEN_MODAL,
  payload: {
    isOpen: true,
    onConfirm: onConfirm,
    onCancel: onCancel,
    text: text,
  },
});
