import { ACTION_TYPE } from '.';

export const addNewCommentAction = (post = {}) => ({
  type: ACTION_TYPE.SET_POST,
  payload: post,
});
