export const deleteComment = (id) =>
  fetch(`http://localhost:3005/comments/${id}`, {
    method: 'DELETE',
  });
