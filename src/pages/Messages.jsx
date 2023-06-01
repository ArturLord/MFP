import React from 'react';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Shelf from 'components/Hf-shelf';
import MessagesBlock from 'components/Messages';

const Messages = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <MessagesBlock />
      </div>
      <Shelf />
      <Footer />
    </>
  );
};

export default Messages;
