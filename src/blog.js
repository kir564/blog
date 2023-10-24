import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { Authorization, Registartion } from './pages';
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

const CenterContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// const AuthorizationContainer = styled(Authorization)`
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

function Blog() {
  return (
    <AppColumn>
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<div>Main Page</div>} />
          <Route
            path="/login"
            element={
              <CenterContainer>
                <Authorization />
              </CenterContainer>
            }
          />
          <Route
            path="/register"
            element={
              <CenterContainer>
                <Registartion />
              </CenterContainer>
            }
          />
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
