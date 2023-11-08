import { transformPost } from '../transformers';

export const getPost = async (id) =>
  fetch(`http://localhost:3005/posts/${id}`)
    .then((response) => response.json())
    .then((loadedPost) => loadedPost && transformPost(loadedPost));
