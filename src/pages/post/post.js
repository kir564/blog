import { useEffect, useLayoutEffect, useState } from 'react';
import { useMatch, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Comments, PostContent, PostForm } from './components';
import { PrivateContent } from '../../components';
import { loadPostAction, REMOVE_POST_ACTION } from '../../actions';
import { useServerRequest } from '../../hooks';
import { selectPost } from '../../selectors';
import styled from 'styled-components';
import { ROLE } from '../../bff/constans';

const PostContainer = ({ className }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const serverRequest = useServerRequest();
  const post = useSelector(selectPost);
  const isEditing = useMatch('/post/:id/edit');
  const isCreating = useMatch('/post');

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    dispatch(REMOVE_POST_ACTION);
  }, [dispatch, isCreating]);

  useEffect(() => {
    if (isCreating) {
      setIsLoading(false);
      return;
    }

    dispatch(loadPostAction(params.id, serverRequest))
      .then((postData) => {
        setError(postData.error);
      })
      .finally(() => setIsLoading(false));
  }, [serverRequest, dispatch, params.id, isCreating]);

  if (isLoading) {
    return null;
  }

  return (
    <div className={className}>
      {isEditing || isCreating ? (
        <PrivateContent serverError={error} access={[ROLE.ADMIN]}>
          <PostForm post={post} />
        </PrivateContent>
      ) : (
        <PrivateContent
          serverError={error}
          access={[ROLE.ADMIN, ROLE.GUEST, ROLE.MODERATOR, ROLE.READER]}
        >
          <PostContent post={post} />
          <Comments comments={post.comments} postId={post.id} />
        </PrivateContent>
      )}
    </div>
  );
};

export const Post = styled(PostContainer)`
  padding: 40px 80px;
`;
