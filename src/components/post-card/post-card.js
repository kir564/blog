import { Icon } from '../icon/icon';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled(Link)`
  display: block;
  width: 280px;
  height: 300px;
  cursor: pointer;
  overflow: hidden;
  border: 1px solid #000;
  border-radius: 0.5rem;
`;

const PostCardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
`;

const PostCardBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  /* flex-grow: 1; */
  justify-content: space-between;
  /* height: 120px; */
  padding: 1rem;
`;

const PostCardTitle = styled.h3`
  margin: 0;
  max-height: 66px;
  text-overflow: ellipsis;
  /* white-space: nowrap; */
  overflow: hidden;
`;

const PostCardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PostCardInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const PostCard = ({ post }) => {
  const { id, title, imageUrl, commentsCount, publishedAt } = post;
  return (
    <Wrapper to={`/post/${id}`}>
      <PostCardImage src={imageUrl} alt={title} />
      <PostCardBody>
        <PostCardTitle>{title}</PostCardTitle>
        <PostCardInfo>
          <PostCardInfoItem>
            <Icon id="fa-calendar-o" size="14px" cursor="default" />
            {publishedAt}
          </PostCardInfoItem>
          <PostCardInfoItem>
            <Icon id="fa-comment-o" size="16px" cursor="default" />
            {commentsCount}
          </PostCardInfoItem>
        </PostCardInfo>
      </PostCardBody>
    </Wrapper>
  );
};
