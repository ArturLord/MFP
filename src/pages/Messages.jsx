import React from 'react';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Shelf from 'components/Hf-shelf';
import MessagesBlock from 'components/Messages';
import HeaderMobile from 'components/HeaderMobile';
import NavBar from 'components/NavBar';

const Messages = () => {
  const isMobile = window.innerWidth < 767;

  return (
    <>
      {isMobile ? <HeaderMobile /> : <Header />}
      <div className="wrapper">
        <MessagesBlock />
      </div>
      {isMobile && <NavBar />}
      <Shelf />
      <Footer />
    </>
  );
};

export default Messages;
