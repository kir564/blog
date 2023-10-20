import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { Authorization } from './pages';
import styled from 'styled-components';

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1000px;
  min-height: 100%;
  height: 100%;
  background-color: #fff;
  margin: 0 auto;
`;

const Content = styled.div`
  padding: 120px 0 0;
  flex-grow: 1;
`;

const AuthorizationContainer = styled(Authorization)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Blog() {
  return (
    <AppColumn>
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<div>Main Page</div>} />
          <Route path="/login" element={<AuthorizationContainer />} />
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
