import { getPost, getComments } from '../api';

export const fetchPost = async (postId) => {
  let post = null;
  let error = null;

  try {
    post = await getPost(postId);
  } catch (e) {
    error = e;
  }

  if (error) {
    return {
      error: error,
      res: null,
    };
  }

  const comments = await getComments(postId);

  return {
    error: null,
    res: { ...post, comments },
  };
};
