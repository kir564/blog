import { REMOVE_POST_ACTION } from './remove-post-action';

export const removePostActionAsync = (serverRequest, postId) => (dispatch) =>
  serverRequest('removePost', postId).then(() => dispatch(REMOVE_POST_ACTION));
