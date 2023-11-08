import { setPostAction } from './set-post-action';

export const removeCommentAction =
  (requestServer, id, postId) => (dispatch) => {
    requestServer('removeComment', id, postId).then(({ res }) => {
      dispatch(setPostAction(res));
    });
  };
