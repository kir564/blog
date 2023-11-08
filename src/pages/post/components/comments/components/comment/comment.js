import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Icon } from '../../../../../../components';
import { useServerRequest } from '../../../../../../hooks';
import {
  removeCommentAction,
  openModalAction,
  CLOSE_MODAL_ACTION,
} from '../../../../../../actions';
import { closeModal } from '../../../../../../components/modal/utils/close-modal';

const CommentContainer = ({ className, comment, postId }) => {
  const dispatch = useDispatch();
  const requestServer = useServerRequest();
  const { id, author, publishedAt, content } = comment;

  const onRemoveComment = (requestServer, id, postId) => {
    const deleteComment = () => {
      dispatch(removeCommentAction(requestServer, id, postId));
      dispatch(CLOSE_MODAL_ACTION);
    };

    dispatch(
      openModalAction({
        text: 'Удалить комментарий?',
        onConfirm: deleteComment,
        onCancel: () => {
          closeModal(dispatch);
        },
      })
    );
  };

  return (
    <div className={className}>
      <div className="comment">
        <div className="info">
          <div className="author">
            <Icon id="fa-user-circle-o" size="18px" cursor="default" />
            <div>{author}</div>
          </div>
          <div className="published-at">
            <Icon id="fa-calendar-o" size="16px" cursor="default" />
            <div>{publishedAt}</div>
          </div>
        </div>
        <div className="text">{content}</div>
      </div>
      <Icon
        id="fa-trash-o"
        onClick={() => onRemoveComment(requestServer, id, postId)}
      ></Icon>
    </div>
  );
};

export const Comment = styled(CommentContainer)`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  margin-top: 10px;

  & .comment {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    max-width: 542px;
    border: 1px solid #000;
    border-radius: 2px;
    padding: 5px;
  }

  & .info {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }

  & .author {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  & .published-at {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;
