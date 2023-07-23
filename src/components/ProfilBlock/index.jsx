import React from 'react';
import { useSelector } from 'react-redux';

import LoaderProfil from 'components/Loaders/LoaderPB';

import styles from './ProfilBlock.module.scss';

const ProfilBlock = ({ posts, openModal, setVisibleModalEdit }) => {
  const { authUser, status } = useSelector((state) => state.user);

  const changedButton = () => {
    if (window.innerWidth > 1024) {
      return (
        <button ref={editRef} onClick={openModal} className={styles.editBtn}>
          Редактировать профиль
        </button>
      );
    } else {
      return <img ref={editRef} onClick={openModal} src="/img/icons/settings.png" alt="settings" />;
    }
  };

  const editRef = React.useRef();

  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (editRef.current && !e.composedPath().includes(editRef.current)) {
        setVisibleModalEdit(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const { nickname, avatarUrl, subscribers, subscribed, lastName, firstName, description, url } =
    authUser;

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        {status === 'error' ? (
          <h2>Произошла ошибка</h2>
        ) : status === 'loading' ? (
          <LoaderProfil />
        ) : (
          <div className={styles.content}>
            <img className={styles.avatar} src={avatarUrl} alt="avatar" />
            <div className={styles.rightBlock}>
              <div className={styles.upBlock}>
                <span>{nickname}</span>
                {changedButton()}
              </div>
              <div className={styles.lowBlock}>
                <span>{posts.length} публикаций</span>
                <span>{subscribers.length} подписчиков</span>
                <span>{subscribed.length} подписок</span>
              </div>
              <div className={styles.lowRow}>
                <span>
                  {firstName} {lastName}
                </span>
              </div>
              <div>
                <span>{description}</span>
              </div>
              <a href="/">{url}</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilBlock;
