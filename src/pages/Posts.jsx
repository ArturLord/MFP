import React from 'react';

import Header from '../components/Header';
import Shelf from '../components/Hf-shelf';
import Footer from '../components/Footer';
import PostsBlock from '../components/Posts';

import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '../components/Loader';

const Posts = ({ photos, isLoading }) => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <InfiniteScroll
          dataLength={photos ? photos.length : 0}
          next={() => console.log('next')}
          hasMore={true}
          // loader={'loading'}
          endMessage={<p>Вы пролистали все посты</p>}
        >
          {isLoading ? (
            <Loader/>
          ) : (
            photos.map(({ author, imgUrl, id, likes, comments }) => (
              <PostsBlock
                key={id}
                id={id}
                userName={author.nickname}
                avatarUrl={author.avatarUrl}
                userId={author.id}
                imgUrl={imgUrl}
                likes={likes.length}
                isLiked={true}
                comments={comments}
              />
            ))
          )}
        </InfiniteScroll>

        <Shelf />
        <Footer />
      </div>
    </>
  );
};

export default Posts;
