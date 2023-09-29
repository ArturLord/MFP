import React from 'react';
import { useSelector } from 'react-redux';

import LoaderProfil from 'components/Loaders/LoaderPB';

import styles from './ProfilBlock.module.scss';

const ProfilBlock = ({ posts, openModal, setVisibleModalEdit }) => {
  const { authUser, status } = useSelector((state) => state.user);
  const editRef = React.useRef();

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

  const changedUI = () => {
    if (window.innerWidth > 767) {
      return (
        <div className={styles.content}>
          <div className={styles.leftBlock}>
            <img className={styles.avatar} src={avatarUrl} alt="avatar" />
          </div>
          <div className={styles.rightBlock}>
            <div className={styles.upBlock}>
              <span>{nickname}</span>
              {changedButton()}
            </div>
            <div className={styles.lowBlock}>
              <div className={styles.subscribed}>
                {' '}
                <span>{posts.length} </span>
                <span>публикаций</span>
              </div>
              <div className={styles.subscribed}>
                <span>{subscribers.length}</span>
                <span>подписчиков</span>
              </div>
              <div className={styles.subscribed}>
                <span>{subscribed.length}</span>
                <span>подписок</span>
              </div>
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
      );
    } else {
      return (
        <>
          <div className={styles.content}>
            <div className={styles.leftBlock}>
              <img className={styles.avatar} src={avatarUrl} alt="avatar" />
            </div>
            <div className={styles.rightBlock}>
              <div className={styles.upBlock}>
                <span>{nickname}</span>
                {changedButton()}
              </div>
              <div className={styles.lowBlock}>
                <div className={styles.subscribed}>
                  {' '}
                  <span>{posts.length} </span>
                  <span>публикаций</span>
                </div>
                <div className={styles.subscribed}>
                  <span>{subscribers.length}</span>
                  <span>подписчиков</span>
                </div>
                <div className={styles.subscribed}>
                  <span>{subscribed.length}</span>
                  <span>подписок</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.lowContent}>
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
        </>
      );
    }
  };



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
          <h4 className={styles.errorUsers}>Неудалось загрузить пользователя <span>😓</span></h4>
        ) : status === 'loading' ? (
          <LoaderProfil />
        ) : (
          <>{changedUI()}</>
        )}
      </div>
    </div>
  );
};

export default ProfilBlock;
