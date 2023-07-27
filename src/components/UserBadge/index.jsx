import React from 'react';

import styles from './UserBadge.module.scss';

const UserBadge = ({ nickname, avatarUrl, onClickButton }) => {
  return (
    <div onClick={onClickButton} className={styles.UserBadge}>
      {avatarUrl ? (
        <img className={styles.avatar} src={avatarUrl} alt="avatar" />
      ) : (
        <div className={styles.root}>
          <div className={styles.placeholder}></div>
          {window.innerWidth > 1024 && <div className={styles.nameLoad}></div>}
        </div>
      )}
      <span className={styles.name}>{nickname}</span>
    </div>
  );
};

export default UserBadge;
