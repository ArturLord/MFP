import React from 'react';

import styles from './Comment.module.scss';

const Comment = ({ nickname, text, onDelete }) => {
  return (
    <div className={styles.root}>
      <div className={styles.comment}>
        <span className={styles.name}>{nickname}:</span>
        <span>{text}</span>
      </div>
      <span onClick={onDelete} className={styles.delete}>
        удалить
      </span>
    </div>
  );
};

export default Comment;
