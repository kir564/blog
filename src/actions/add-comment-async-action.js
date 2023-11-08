import { setPostAction } from './set-post-action';

export const addCommentAsyncAction =
  (serverRequest, user, postId, comment) => (dispatch) => {
    serverRequest('fetchAddComment', user, postId, comment).then(({ res }) => {
      dispatch(setPostAction(res));
    });
  };
