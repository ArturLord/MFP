import React from 'react';

import Header from '../components/Header';
import Shelf from '../components/Hf-shelf';
import Footer from '../components/Footer';
import PostsBlock from '../components/Posts';

import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from 'api/posts';
import { setCurrentPage, setPosts } from 'redux/slices/postsSlice';

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, currentPage, status } = useSelector((state) => state.posts);
  const [photosTotal, setPhotosTotal] = React.useState(0);

  // console.log(posts, 'pos')

  const nextPage = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  React.useEffect(() => {
    dispatch(fetchPosts({ currentPage, setPhotosTotal, posts, status, setPosts }));
  }, [currentPage]);

  return (
    <>
      <Header />
      <div className="wrapper">
        {status === 'error' ? (
          <h2>Произошла ошибка</h2>
        ) : (
          <div>
            {status === 'loading' ? (
              <Loader />
            ) : (
              <InfiniteScroll
                dataLength={posts ? posts.length : 0}
                next={nextPage}
                hasMore={posts.length < photosTotal}
                loader={<Loader />}
                endMessage={<p>Вы пролистали все посты</p>}
              >
                {posts.map(({ author, imgUrl, id, likes, comments }) => (
                  <PostsBlock
                    key={id}
                    id={id}
                    userName={author.nickname}
                    avatarUrl={author.avatarUrl}
                    userId={author.id}
                    imgUrl={imgUrl}
                    likes={true}
                    isLikedByYou={true}
                    comments={comments}
                  />
                ))}
              </InfiniteScroll>
            )}
          </div>
        )}
      </div>
      <Shelf />
      <Footer />
    </>
  );
};

export default Posts;
