import { useLayoutEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useServerRequest } from '../../../../hooks';
import { savePostActionAsync } from '../../../../actions';
import { Icon, Input } from '../../../../components';
import { SpecialPanel } from '../special-panel/special-panel';
import { sanizeContent } from './utils';
import styled from 'styled-components';
import { PROP_TYPE } from '../../../../constans';

const PostFormContainer = ({ className, post }) => {
  const { id, title, imageUrl, content, publishedAt } = post;
  const [newImageUrl, setNewImageUrl] = useState(imageUrl);
  const [newTitle, setNewTitle] = useState(title);

  // const imageRef = useRef(null);
  // const titleRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    setNewImageUrl(imageUrl);
    setNewTitle(title);
  }, [title, imageUrl]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const serverRequest = useServerRequest();

  const onSave = () => {
    // const newImageRef = imageRef.current.value;
    // const newTitle = titleRef.current.value;
    const newContent = sanizeContent(contentRef.current.innerHTML);

    dispatch(
      savePostActionAsync(serverRequest, {
        id: id,
        title: newTitle,
        image_url: newImageUrl,
        content: newContent,
      })
    ).then((post) => {
      navigate(`/post/${post.id}`);
    });
  };

  return (
    <div className={className}>
      <Input
        value={newImageUrl}
        onChange={(e) => setNewImageUrl(e.target.value)}
        placeholder="Изображение"
      />
      <Input
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="Заголовок"
      />
      <SpecialPanel
        postId={id}
        publishedAt={publishedAt}
        editButton={<Icon id="fa-floppy-o" onClick={onSave} />}
      />
      <div
        ref={contentRef}
        contentEditable={true}
        suppressContentEditableWarning={true}
        className="post-text"
      >
        {content}
      </div>
    </div>
  );
};

export const PostForm = styled(PostFormContainer)`
  & h2 {
    text-align: left;
  }
  & img {
    float: left;
    margin: 0 20px 20px 0;
  }
  & .special-panel {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
  }

  & .special-panel__item {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  & .post-text {
    white-space: pre-line;
    padding: 5px;
    min-height: 100px;
    border: 1px solid #000;
  }
`;

PostForm.propTypes = {
  post: PROP_TYPE.POST.isRequired,
};
