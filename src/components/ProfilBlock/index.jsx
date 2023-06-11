import React from 'react';

import styles from './ProfilBlock.module.scss';

const ProfilBlock = ({nickname, avatarUrl, posts, subscribers, subscribed,  lastName, firstName, description, url, openModal, setVisibleModalEdit}) => {

  const editRef = React.useRef();

  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (editRef.current && !e.composedPath().includes(editRef.current)) {
        setVisibleModalEdit(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside)
    }
  }, []);

    return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <img className={styles.avatar} src={avatarUrl} alt="avatar" />
        </div>
        <div className={styles.rightBlock}>
         <div className={styles.upBlock}>
         <span>{nickname}</span>
            <button ref={editRef} onClick={openModal} className={styles.editBtn}>Редактировать профиль</button>
         </div>
          <div className={styles.lowBlock}>
            <span>{posts.length} публикаций</span>
            <span>{subscribers.length} подписчиков</span>
            <span>{subscribed.length} подписок</span>
          </div>
          <div className={styles.lowRow}>
            <span>{firstName} {lastName}</span>
          </div>
          <div>
            <span>{description}</span>
          </div>
          <a href="/">{url}</a>
        </div>
      </div>
    </div>
  );
};

export default ProfilBlock;
