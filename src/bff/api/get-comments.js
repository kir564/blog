import { transformComment } from '../transformers';

export const getComments = async (postId) =>
  fetch(`http://localhost:3005/comments?post_id=${postId}`)
    .then((response) => response.json())
    .then(
      (loadedComments) =>
        loadedComments &&
        loadedComments.map((comment) => transformComment(comment))
    );
