import { generateDate } from '../utils';

export const createPost = ({ image_url, title, content }) =>
  fetch(`http://localhost:3005/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      image_url,
      title,
      content,
      published_at: generateDate(),
    }),
  }).then((loadedPost) => loadedPost.json());
