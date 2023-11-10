import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer, Modal } from './components';
import { Authorization, Registartion, Users, Post, Main } from './pages';
import { setUserAction } from './actions';
import styled from 'styled-components';
import { sessions } from './bff/sessions';

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1000px;
  min-height: 100%;
  /* height: 100%; */
  background-color: #fff;
  margin: 0 auto;
`;

const Pages = styled.div`
  padding: 120px 0;
  flex-grow: 1;
  position: relative;

  /* height: 100%; */
`;

const CenterContainer = styled.div`
  height: 100%;
  /* display: flex; */
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
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const currentUserData = sessionStorage.getItem('userData');
    // const sessionList = sessionStorage.getItem('sessionList')

    if (currentUserData) {
      dispatch(setUserAction(JSON.parse(currentUserData)));
    }
  }, [dispatch]);

  return (
    <AppColumn>
      <Header />
      <Pages>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/login"
            element={
              // <CenterContainer>
              <Authorization />
              // </CenterContainer>
            }
          />
          <Route
            path="/register"
            element={
              // <CenterContainer>
              <Registartion />
              // </CenterContainer>
            }
          />
          <Route path="/users" element={<Users />} />
          <Route path="/post" element={<Post />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/post/:id/edit" element={<Post />} />
          <Route path="/*" element={<div>Error</div>} />
        </Routes>
      </Pages>
      <Footer />
      <Modal />
    </AppColumn>
  );
}

export default Blog;
