import { ACTION_TYPE } from './action-type';

export const setPostAction = (postData) => ({
  type: ACTION_TYPE.SET_POST,
  payload: postData,
});
