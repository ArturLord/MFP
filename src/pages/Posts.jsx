import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsers } from 'api/users';
import { fetchPosts, sendComment, deleteComment, toggleLike } from 'api/posts';

import { setCurrentPage } from 'redux/slices/postsSlice';

import Header from '../components/Header';
import Shelf from '../components/Hf-shelf';
import Footer from '../components/Footer';
import PostsBlock from '../components/Posts';
import Loader from '../components/Loaders/Loader';
import LoaderPost from 'components/Loaders/LoaderPost';

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, currentPage, status } = useSelector((state) => state.posts);
  const { authUser } = useSelector((state) => state.user);
  const [photosTotal, setPhotosTotal] = React.useState(0);

  const onLikeClick = (photoId) => {
    dispatch(toggleLike({ userId: authUser.id, photoId }));
  };

  const nextPage = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  const onCommentSendClick = (photoId, comment) => {
    const newCommentId =
      Math.max(...posts.flatMap((post) => post.comments.map((comment) => comment.id))) + 1;
    dispatch(
      sendComment({ nickname: authUser.nickname, photoId, text: comment, idComment: newCommentId }),
    );
  };

  const handleDeleteComment = (photoId, commentId) => {
    dispatch(deleteComment({ nickname: '', text: '', photoId, commentId }));
  };

  React.useEffect(() => {
    dispatch(fetchPosts({ currentPage, setPhotosTotal, posts }));
  }, [currentPage]);

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <Header />
      <div className="wrapper">
        {status === 'error' ? (
          <h2>Произошла ошибка</h2>
        ) : (
          <div>
            {status === 'loading' ? (
              [...new Array(4)].map((_, i) => <LoaderPost key={i} />)
            ) : (
              <InfiniteScroll
                dataLength={posts.length}
                next={nextPage}
                hasMore={posts.length < photosTotal}
                loader={<Loader />}
                endMessage={<p style={{ textAlign: 'center' }}>Вы пролистали все посты</p>}
              >
                {posts.map(({ author, imgUrl, id, likes, comments }) => (
                  <PostsBlock
                    key={id}
                    id={id}
                    userName={author.nickname}
                    avatarUrl={author.avatarUrl}
                    userId={author.id}
                    imgUrl={imgUrl}
                    likes={likes.length}
                    isLikedByYou={likes.includes(authUser.id)}
                    comments={comments}
                    onLikeClick={onLikeClick}
                    onCommentSendClick={onCommentSendClick}
                    handleDeleteComment={(commentId) => handleDeleteComment(id, commentId)}
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
