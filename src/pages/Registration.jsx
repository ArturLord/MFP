import React from 'react';

import Header from '../components/Header';
import Shelf from '../components/Hf-shelf';
import Footer from '../components/Footer';
import RegistrationBlock from '../components/RegistrationBlock';

const Registration = () => {
  const isMobile = window.innerWidth > 767;

  return (
    <>
         {isMobile && <Header />}
      <div className="wrapper">
        <RegistrationBlock />
      </div>
      <Shelf />
      <Footer />
    </>
  );
};

export default Registration;
