import { useNavigate } from 'react-router-dom';
import { H2, Icon } from '../../../../components';
import { SpecialPanel } from '../special-panel/special-panel';
import styled from 'styled-components';

const PostContentContainer = ({ className, post }) => {
  const { id, title, imageUrl, content, publishedAt } = post;

  const navigate = useNavigate();

  const onEdit = () => {
    navigate(`/post/${id}/edit`);
  };

  return (
    <div className={className}>
      <img src={imageUrl} alt={title} />
      <H2>{title}</H2>
      <SpecialPanel
        postId={id}
        publishedAt={publishedAt}
        editButton={<Icon id="fa-pencil-square-o" onClick={onEdit} />}
      />
      <div className="post-text">{content}</div>
    </div>
  );
};

export const PostContent = styled(PostContentContainer)`
  & h2 {
    text-align: left;
  }
  & img {
    float: left;
    margin: 0 20px 20px 0;
  }

  & .post-text {
    white-space: pre-line;
  }
`;
