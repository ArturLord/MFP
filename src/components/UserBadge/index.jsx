import React from "react";
import { useNavigate } from "react-router-dom";

import styles from './UserBadge.module.scss'

const UserBadge = ({ nickname, avatarUrl, id, onClickButton, setDownBlock }) => {
  const userPopupRef = React.useRef();
//   const navigate = useNavigate();

//   const onUserBadgeClick = () => {
//     navigate(`/${id}`);
//   }

React.useEffect(() => {
  const handleClickOutside = (e) => {
    if (userPopupRef.current && !e.composedPath().includes(userPopupRef.current)) {
      setDownBlock(false);
    }
  };

  document.body.addEventListener('click', handleClickOutside);

  return () => {
    document.body.removeEventListener('click', handleClickOutside)
  }
}, []);


  return (
    <div ref={userPopupRef} onClick={onClickButton} className={styles.UserBadge}>
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
