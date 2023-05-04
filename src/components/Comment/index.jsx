import React from "react";

import styles from './Comment.module.scss'

const Comment = ({ nickname, text }) => {
  return (
    <div className={styles.comment}>
      <span className={styles.name}>{nickname}:</span>
      <span>{text}</span>
    </div>
  );
};

export default Comment;
