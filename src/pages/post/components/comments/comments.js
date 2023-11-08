import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '../../../../components';
import { Comment } from './components';
import styled from 'styled-components';
import { useServerRequest } from '../../../../hooks';
import { selectUser } from '../../../../selectors';
import { addCommentAsyncAction } from '../../../../actions';

const CommentsContainer = ({ className, comments, postId }) => {
  const [newComment, setNewComment] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const serverRequest = useServerRequest();

  const writeComment = ({ target }) => {
    setNewComment(target.value);
  };

  const onNewCommentAdd = (serverRequest, user, postId, content) => {
    dispatch(addCommentAsyncAction(serverRequest, user, postId, content));
    setNewComment('');
  };

  return (
    <div className={className}>
      <div className="new-comment">
        <textarea
          name="comment"
          value={newComment}
          onChange={writeComment}
          placeholder="Написать комментарий"
        ></textarea>
        <Icon
          id="fa-paper-plane-o"
          size="18px"
          onClick={() =>
            onNewCommentAdd(serverRequest, user, postId, newComment)
          }
        />
      </div>
      <div className="comments">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} postId={postId} />
        ))}
      </div>
    </div>
  );
};

export const Comments = styled(CommentsContainer)`
  width: 570px;
  margin: 20px auto;

  & .new-comment {
    display: flex;
    align-items: flex-start;
    width: 100%;
    gap: 10px;
  }

  & .comments {
    width: 100%;
  }

  & textarea {
    width: 100%;
    height: 100px;
    font-size: 18px;
    resize: none;
    padding: 5px;
    border: 1px solid #000;
  }
`;
