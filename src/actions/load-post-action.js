import { setPostAction } from './set-post-action';

export const loadPostAction = (id, serverRequest) => (dispatch) =>
  serverRequest('fetchPost', id).then((data) => {
    if (data.res) {
      dispatch(setPostAction(data.res));
    }
    return data;
  });
