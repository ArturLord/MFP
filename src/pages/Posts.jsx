import React from 'react';

import Header from '../components/Header';
import Shelf from '../components/Hf-shelf';
import Footer from '../components/Footer';
import PostsBlock from '../components/Posts';

import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '../components/Loader';

const Posts = ({ photos, isLoading, nextPage, photosTotal }) => {

  return (
    <>
      <Header />
      <div className="wrapper">
        {isLoading ? (
          <Loader />
        ) : (
          <InfiniteScroll
            dataLength={photos ? photos.length : 0}
            next={nextPage}
            hasMore={photos.length < photosTotal}
            loader={<Loader />}
            endMessage={<p>Вы пролистали все посты</p>}
          >
            {photos.map(({ author, imgUrl, id, likes, comments }) => (
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
            ))}
          </InfiniteScroll>
        )}

        <Shelf />
        <Footer />
      </div>
    </>
  );
};

export default Posts;
