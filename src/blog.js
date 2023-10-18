import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import styled from 'styled-components';

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1000px;
  min-height: 100%;
  background-color: #fff;
  margin: 0 auto;
`;

const Content = styled.div`
  padding: 120px 0;
`;
const H2 = styled.h2`
  text-align: center;
`;

function Blog() {
  return (
    <AppColumn>
      <Header />
      <Content>
        <H2>Content page:</H2>
        <Routes>
          <Route path="/" element={<div>Main Page</div>} />
          <Route path="/login" element={<div>Authorization Page</div>} />
          <Route path="/register" element={<div>Registration Page</div>} />
          <Route path="/users" element={<div>Users Page</div>} />
          <Route path="/post" element={<div>New Article Page</div>} />
          <Route path="/post/:postId" element={<div>Article Page</div>} />
          <Route path="/*" element={<div>Error</div>} />
        </Routes>
      </Content>
      <Footer />
    </AppColumn>
  );
}

export default Blog;
