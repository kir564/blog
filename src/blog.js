import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => <div>Header</div>;
const Footer = () => <div>Footer</div>;
const Content = styled.div`
  padding: 120px 0;
`;
const H2 = styled.h2`
  text-align: center;
`;

function Blog() {
  return (
    <>
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
    </>
  );
}

export default Blog;
