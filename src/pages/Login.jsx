import React from 'react';

import Header from '../components/Header';
import  UserLoginBlock  from './userLogin';
import Shelf from '../components/Hf-shelf';
import Footer from '../components/Footer';

const Login = () => {
  return (
   <>
    <Header/>
    <div className="wrapper">
      {/* <PicturesSlide /> */}
      <UserLoginBlock />
    </div>
    <Shelf />
    <Footer />
   </>
  );
};

export default Login;
