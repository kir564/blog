export const transformComment = (comment) => ({
  id: comment.id,
  postId: comment.post_id,
  authorId: comment.author_id,
  publishedAt: comment.published_at,
  content: comment.content,
  author: comment.author,
});
