import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  CLOSE_MODAL_ACTION,
  openModalAction,
  removePostActionAsync,
} from '../../../../actions';
import { Icon } from '../../../../components';
import { useServerRequest } from '../../../../hooks';
import { closeModal } from '../../../../components/modal/utils';
import styled from 'styled-components';

const SpecialPanelContainer = ({
  className,
  publishedAt,
  editButton,
  postId,
}) => {
  const dispatch = useDispatch();
  const requestServer = useServerRequest();
  const navigate = useNavigate();

  const onRemovePost = () => {
    const deletePost = () => {
      dispatch(removePostActionAsync(requestServer, postId)).then(() => {
        navigate('/');
      });
      dispatch(CLOSE_MODAL_ACTION);
    };

    dispatch(
      openModalAction({
        text: 'Удалить статью?',
        onConfirm: deletePost,
        onCancel: () => {
          closeModal(dispatch);
        },
      })
    );
  };

  return (
    <div className={className}>
      <div className="special-panel__item">
        {publishedAt && (
          <Icon id="fa-calendar-o" size="18px" cursor="default" />
        )}
        <div>{publishedAt}</div>
      </div>
      <div className="special-panel__item">
        {editButton}
        {publishedAt && <Icon id="fa-trash-o" onClick={onRemovePost} />}
      </div>
    </div>
  );
};

export const SpecialPanel = styled(SpecialPanelContainer)`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;

  & .special-panel__item {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
