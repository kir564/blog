import { setPostAction } from './set-post-action';

export const loadPostAction = (id, serverRequest) => (dispatch) => {
  serverRequest('fetchPost', id).then(({ res }) => {
    dispatch(setPostAction(res));
  });
};
