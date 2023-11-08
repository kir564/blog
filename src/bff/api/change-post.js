export const changePost = ({ id, content, image_url, title }) =>
  fetch(`http://localhost:3005/posts/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      image_url,
      title,
      content,
    }),
  }).then((loadedPost) => loadedPost.json());
