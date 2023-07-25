import React from 'react';

import UserBadge from '../UserBadge';
import Comment from '../Comment';
import PhotoModal from 'components/PhotoModal';

import styles from './Posts.module.scss';

const PostsBlock = ({
  userName,
  avatarUrl,
  id,
  userId,
  imgUrl,
  likes,
  comments,
  isLikedByYou,
  onLikeClick,
  onCommentSendClick,
  handleDeleteComment,
}) => {
  const [commentShow, setCommentShow] = React.useState(false);
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [comment, setComment] = React.useState('');
  const isMobile = window.innerWidth > 767;

  const handleSendComment = () => {
    if (comment) {
      onCommentSendClick(id, comment);
      setComment('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendComment();
    }
  };

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
          {commentForRender.map((comment) => (
            <Comment
              {...comment}
              key={comment.id}
              onDelete={() => handleDeleteComment(comment.id)}
            />
          ))}
        </>
      );
    }
    return comments.map((comment) => (
      <Comment {...comment} key={comment.id} onDelete={() => handleDeleteComment(comment.id)} />
    ));
  };

  return (
    <div className={styles.fullPosts}>
      <div className={styles.postsHeader}>
        <UserBadge nickname={userName} avatarUrl={avatarUrl} id={userId} />
      </div>
      <div onClick={isMobile ? () => setIsModalVisible(true) : () => setIsModalVisible(false)}>
        <img className={styles.postsImg} src={imgUrl} alt="img" />
      </div>
      <div className={styles.postsButton}>
        <img
          onClick={() => onLikeClick(id)}
          src={isLikedByYou ? 'img/icons/liked.png' : 'img/icons/noliked.png'}
          className={styles.likesIcon}
        />
        <img src="img/icons/comment.png" />
      </div>
      <div className={styles.postsLike}>Оценили {likes} человек</div>
      <div className={styles.postsComments}>{renderComments()}</div>
      <div className={styles.textareaWrapper}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onKeyDown={handleKeyDown}
          className={styles.postsText}
        />
        <button onClick={handleSendComment} className={styles.sendButton}>
          Отправить
        </button>
      </div>
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

export default PostsBlock;
