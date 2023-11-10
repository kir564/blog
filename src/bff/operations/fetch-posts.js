import { getComments, getPosts } from '../api';

export const fetchPosts = async (page, limit, searchPhrase) => {
  const [postsData, comments] = await Promise.all([
    getPosts(page, limit, searchPhrase),
    getComments(),
  ]);

  const { posts, countPosts } = postsData;

  const postsWithCommentsCount = posts.map((post) => {
    const commentsCount = comments.filter(
      ({ postId }) => postId === post.id
    ).length;

    return {
      ...post,
      commentsCount,
    };
  });

  return {
    error: null,
    res: { posts: postsWithCommentsCount, countPosts },
  };
};
