import { transformPost } from '../transformers';

export const getPost = async (id) =>
  fetch(`http://localhost:3005/posts/${id}`)
    .then((response) => {
      if (response.ok) {
        return response;
      }

      const error =
        response.status === 404
          ? 'Такая страница не существует'
          : 'Что-то пошло не так. Попробуйте ещё раз позднее';

      return Promise.reject(error);
    })
    .then((response) => response.json())
    .then((loadedPost) => loadedPost && transformPost(loadedPost));
