import { changePost, createPost } from '../api';
import { ROLE } from '../constans';
import { sessions } from '../sessions';

export const editPost = async (hash, postData) => {
  const accessRoles = [ROLE.ADMIN];

  const accsess = await sessions.access(hash, accessRoles);

  if (!accsess) {
    return {
      error: 'Редактировать могут  только админ и модератор',
      res: null,
    };
  }

  const post =
    postData.id === ''
      ? await createPost(postData)
      : await changePost(postData);

  return {
    error: null,
    res: post,
  };
};
