import React from "react";
import { useNavigate } from "react-router-dom";

import styles from './UserBadge.module.scss'

const UserBadge = ({ nickname, avatarUrl, id, onClickButton, setDownBlock }) => {

//   const navigate = useNavigate();

//   const onUserBadgeClick = () => {
//     navigate(`/${id}`);
//   }




  return (
    <div onClick={onClickButton} className={styles.UserBadge}>
      {avatarUrl ? (
        <img className={styles.avatar} src={avatarUrl} alt="avatar" />
      ) : (
        <div className={styles.placeholder}></div>
      )}
      <span className={styles.name}>{nickname}</span>
    </div>
  );
};

export default UserBadge;
