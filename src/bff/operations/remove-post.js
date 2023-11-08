import { deletePost, getComments, deleteComment } from '../api';
import { ROLE } from '../constans';
import { sessions } from '../sessions';

export const removePost = async (hash, postId) => {
  const accessRoles = [ROLE.ADMIN];

  const accsess = await sessions.access(hash, accessRoles);

  if (!accsess) {
    return {
      error: 'Удалить статью может  только админ ',
      res: null,
    };
  }

  await deletePost(postId);

  const comments = await getComments(postId);

  await Promise.all(comments.map(({ id }) => deleteComment(id)));

  return {
    error: null,
    res: true,
  };
};
