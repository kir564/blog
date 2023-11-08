import { setPostAction } from './set-post-action';

export const savePostActionAsync = (serverRequest, postData) => (dispatch) =>
  serverRequest('editPost', postData).then(({ res }) => {
    dispatch(setPostAction(res));
    return res;
  });
