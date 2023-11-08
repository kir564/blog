import { useEffect, useLayoutEffect } from 'react';
import { useMatch, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Comments, PostContent, PostForm } from './components';
import { loadPostAction, REMOVE_POST_ACTION } from '../../actions';
import { useServerRequest } from '../../hooks';
import { selectPost } from '../../selectors';
import styled from 'styled-components';

const PostContainer = ({ className }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const serverRequest = useServerRequest();
  const post = useSelector(selectPost);
  const isEditing = useMatch('/post/:id/edit');
  const isCreating = useMatch('/post');

  useLayoutEffect(() => {
    dispatch(REMOVE_POST_ACTION);
  }, [dispatch, isCreating]);

  useEffect(() => {
    if (isCreating) {
      return;
    }

    dispatch(loadPostAction(params.id, serverRequest));
  }, [serverRequest, dispatch, params.id, isCreating]);

  return (
    <div className={className}>
      {isEditing || isCreating ? (
        <PostForm post={post} />
      ) : (
        <>
          <PostContent post={post} />
          <Comments comments={post.comments} postId={post.id} />
        </>
      )}
    </div>
  );
};

export const Post = styled(PostContainer)`
  padding: 40px 80px;
`;
