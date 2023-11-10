import { transformPost } from '../transformers';

const getLastPageFromLinks = (links) => {
  const result = links.match(/_page=(\d{1,4})&_limit=\d{1,3}>; rel="last"/);

  return result ? result[1] : 1;
};

export const getPosts = (page, limit, searchPhrase) =>
  fetch(
    `http://localhost:3005/posts?title_like=${searchPhrase}&_page=${page}&_limit=${limit}`
  )
    .then((response) =>
      Promise.all([response.json(), response.headers.get('link')])
    )
    .then(([loadedPosts, links]) => ({
      posts: loadedPosts && loadedPosts.map(transformPost),

      countPosts: getLastPageFromLinks(links),
    }));
