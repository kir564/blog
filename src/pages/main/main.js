import React, { useEffect, useState } from 'react';
import { useServerRequest } from '../../hooks';
import { PostCard, Pagination } from '../../components';
import { PAGINATION_LIMIT } from '../../constans';
import { Search } from './search/search';

import styled from 'styled-components';

const MainElement = styled.main`
  background-color: white;
`;

const Container = styled.div``;

const Wrapper = styled.div`
  width: 100%;
  padding: 3rem 2rem;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(3, 280px);
  gap: 2rem;
`;

export const Main = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(100);
  const [searchPhrase, setSearchPhrase] = useState('');

  const requestServer = useServerRequest();

  useEffect(() => {
    requestServer('fetchPosts', page, PAGINATION_LIMIT, searchPhrase).then(
      ({ res }) => {
        setPosts(res.posts);
        setLastPage(Number(res.countPosts));
      }
    );
  }, [requestServer, page, searchPhrase]);

  return (
    <MainElement>
      <Container>
        <Search setSearchPhrase={setSearchPhrase} />
        <Wrapper>
          {posts.map((post) => {
            return <PostCard key={post.id} post={post} />;
          })}
        </Wrapper>
        {lastPage > 1 && (
          <Pagination setPage={setPage} page={page} lastPage={lastPage} />
        )}
      </Container>
    </MainElement>
  );
};
