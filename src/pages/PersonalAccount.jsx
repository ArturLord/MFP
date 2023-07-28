import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Shelf from '../components/Hf-shelf';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProfilBlock from '../components/ProfilBlock';
import PhotoBlock from '../components/PhotoBlock';
import ModalEditBlock from '../components/ModalEditBlock';

import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { fetchUsers } from 'api/users';
import { fetchPostByUser } from 'api/postByUser';
import { fetchPosts } from 'api/posts';
import NavBar from 'components/NavBar';
import HeaderMobile from 'components/HeaderMobile';

const PersonalAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useAuth();
  console.log(isAuth);
  const { posts } = useSelector((state) => state.posts);
  const { email } = useSelector((state) => state.user);
  const { postsByUser } = useSelector((state) => state.postsUser);
  const [visibleModalEdit, setVisibleModalEdit] = React.useState(false);
  const isMounted = React.useRef(false);
  const isMobile = window.innerWidth < 767;

  React.useEffect(() => {
    dispatch(fetchPostByUser());
  }, []);

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(isAuth);
      localStorage.setItem('auth', json);
    }
    isMounted.current = true;
  }, [isAuth]);

  React.useEffect(() => {
    if (!isAuth || !email) {
      navigate('/');
    }
  }, [navigate, isAuth, email]);

  return (
    <>
      {isMobile ? <HeaderMobile /> : <Header />}
      <ModalEditBlock
        visibleModalEdit={visibleModalEdit}
        closeModal={() => setVisibleModalEdit(false)}
      />
      <div className="wrapper">
        <ProfilBlock
          openModal={() => setVisibleModalEdit(true)}
          setVisibleModalEdit={setVisibleModalEdit}
          posts={postsByUser}
        />
        <PhotoBlock postsByUser={postsByUser} posts={posts} />
        <Shelf />
        <Footer />
      </div>
      {isMobile && <NavBar />}
    </>
  );
};

export default PersonalAccount;
