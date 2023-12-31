import React from 'react';

import Header from '../components/Header';
import UserLoginBlock from './userLogin';
import Shelf from '../components/Hf-shelf';
import Footer from '../components/Footer';

const Login = () => {
  const isMobile = window.innerWidth > 767;
  return (
    <>
      {isMobile && <Header />}
      <div className="wrapper">
        <UserLoginBlock />
      </div>
      <Shelf />
      <Footer />
    </>
  );
};

export default Login;
