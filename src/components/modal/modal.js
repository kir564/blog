import { useSelector } from 'react-redux';
import {
  selectModalText,
  selectModalIsOpen,
  selectModalOnCancel,
  selectModalOnConfirm,
} from '../../selectors';
import { Button } from '../button/button';
import styled from 'styled-components';

const ModalContainer = ({ className }) => {
  const isOpen = useSelector(selectModalIsOpen);
  const text = useSelector(selectModalText);
  const onConfirm = useSelector(selectModalOnConfirm);
  const onCancel = useSelector(selectModalOnCancel);

  return (
    isOpen && (
      <div className={className}>
        <div className="overlay"></div>
        <div className="box">
          <h3>{text}</h3>
          <div className="buttons">
            <Button onClick={onConfirm} width="120px">
              Да
            </Button>
            <Button onClick={onCancel} width="120px">
              Отмена
            </Button>
          </div>
        </div>
      </div>
    )
  );
};

export const Modal = styled(ModalContainer)`
  position: fixed;
  z-index: 20;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  & .overlay {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }

  & .box {
    width: 400px;
    padding: 20px 30px;
    background-color: yellow;
    border: 2px solid #000;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    & h3 {
      text-align: center;
      margin: 0 0 20px;
    }

    & .buttons {
      display: flex;
      height: 25px;
      justify-content: center;
      gap: 20px;
    }
  }
`;
