import { ROLE } from '../constans';
import { sessions } from '../sessions';
import { addComment, getPost, getComments } from '../api';

export const fetchAddComment = async (hash, user, postId, comment) => {
  const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];

  const accsess = await sessions.access(hash, accessRoles);

  if (!accsess) {
    return {
      error:
        'Комментарии могут оставлять только зарегистрированные пользователи',
      res: null,
    };
  }

  await addComment(user, postId, comment);
  const post = await getPost(postId);

  const comments = await getComments(postId);

  return {
    error: null,
    res: { ...post, comments },
  };
};
