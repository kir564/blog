import { ROLE } from '../constans';
import { getComments, deleteComment, getPost } from '../api';
import { sessions } from '../sessions';

export const removeComment = async (hash, id, postId) => {
  const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR];

  const accsess = await sessions.access(hash, accessRoles);

  if (!accsess) {
    return {
      error: 'Комментарии удалять  могут только админ и модератор',
      res: null,
    };
  }

  await deleteComment(id);

  const post = await getPost(postId);
  const comments = await getComments(postId);

  return {
    error: null,
    res: { post, comments },
  };
};
