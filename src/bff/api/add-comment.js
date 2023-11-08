import { generateDate } from '../utils';

export const addComment = async (user, postId, content) =>
  fetch('http://localhost:3005/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      author_id: user.id,
      author: user.login,
      published_at: generateDate(),
      post_id: postId,
      content,
    }),
  });
