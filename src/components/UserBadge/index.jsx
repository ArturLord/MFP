import React from "react";
import { useNavigate } from "react-router-dom";

import styles from './UserBadge.module.scss'

const UserBadge = ({ nickName, avatarUrl, id, onClickButton }) => {
//   const navigate = useNavigate();

//   const onUserBadgeClick = () => {
//     navigate(`/${id}`);
//   }

  return (
    <div onClick={onClickButton} className={styles.UserBadge}>
      {avatarUrl ? (
        <img className={styles.avatar} src='img/icons/icon-vk.png' alt="avatar" />
      ) : (
        <div className={styles.placeholder}></div>
      )}
      <span className={styles.name}>{nickName}</span>
    </div>
  );
};

export default UserBadge;
