import React from 'react';

import Header from '../components/Header';
import Shelf from '../components/Hf-shelf';
import Footer from '../components/Footer';
import PostsBlock from '../components/Posts';

import { AppContext } from '../App';


const Posts = () => {
  const { user } = React.useContext(AppContext);

  return (
    <>
      <Header />
      <div className="wrapper">
        <PostsBlock  
                  // id={id}
                  userName='Artur'
                  // avatarUrl={author.avatarUrl}
                  userId={1}
                  imgUrl=''
                  likes={10}
                  isLikeByYou={false}
                  comments={[{text: 'eqwe', nickname: 'voefew'}, {text: 'eqwe', nickname: 'voefew'}, {text: 'eqwe', nickname: 'voefew'}, {text: 'eqwe', nickname: 'voefew'}]}
                  />
        <Shelf />
        <Footer />
      </div>
    </>
  );
};

export default Posts;
