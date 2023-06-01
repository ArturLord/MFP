import React from 'react';

import styles from './Posts.module.scss';

import UserBadge from '../UserBadge';
import Comment from '../Comment';
import PhotoModal from 'components/PhotoModal';

const Posts = ({
  userName,
  avatarUrl,
  userId,
  imgUrl,
  likes,
  isLiked,
  comments,
  isLikeByYou,
  onLikeClick,
  id,
}) => {
  const [commentShow, setCommentShow] = React.useState(false);
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const renderComments = () => {
    if (comments.length > 2 && !commentShow) {
      const commentsCopy = [...comments];
      const commentForRender = commentsCopy.splice(comments.length - 2, 2);

      return (
        <>
          <span
            className={styles.commentTitle}
            onClick={() => setCommentShow(true)}
          >{`Показать еще ${comments.length - commentForRender.length} комментариев`}</span>
          {commentForRender.map((comment, i) => (
            <Comment {...comment} key={i} />
          ))}
        </>
      );
    }
    return comments.map((comment, i) => <Comment {...comment} key={i} />);
  };

  return (
    <div className={styles.fullPosts}>
      <div className={styles.postsHeader}>
        <UserBadge nickName={userName} avatarUrl={avatarUrl} id={userId} />
      </div>
      <div onClick={() => setIsModalVisible(true)}>
        <img className={styles.postsImg} src={imgUrl} alt="img" />
      </div>
      <div className={styles.postsButton}>
        <i
          onClick={() => onLikeClick(userId, id)}
          className={`${isLikeByYou ? 'fas' : 'far'} fa-heart ${styles.likesIcon}`}
        />
        <i className="fas fa-comment" />
      </div>
      <div className={styles.postsLike}>Оценили {likes} человек</div> 
      <div className={styles.postsComments}>{renderComments()}</div>
      <textarea className={styles.postsText} />
      <PhotoModal
        isOpen={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        comments={comments}
        nickname={userName}
        avatarUrl={avatarUrl}
        imgUrl={imgUrl}
      />
    </div>
  );
};

export default Posts;
