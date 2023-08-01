import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { removeUser, setAuthUser } from 'redux/slices/userSlice';

import ImgMessage from '../@assets/icons/message.png';
import ImgPost from '../@assets/icons/post.png';

import UserBadge from '../UserBadge';

import styles from './Header.module.scss';

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const userPopupRef = React.useRef();
  const { authUser } = useSelector((state) => state.user);
  const locationPage = location.pathname !== '/' && location.pathname !== '/registration';
  const [downBlock, setDownBlock] = React.useState(false);

  const onClickButton = () => {
    setDownBlock(!downBlock);
  };
  const onClickCloseButton = () => {
    setDownBlock(false);
  };

  const logoutUser = () => {
    localStorage.removeItem('auth');
    dispatch(removeUser());
  };

  const mediaLogo = () => {
    if (window.innerWidth > 556) {
      return <h1 className={styles.logo}>My Favourite Pets</h1>;
    } else {
      return <h1 style={{ fontSize: 21, fontFamily: 'Dancing Script' }}>MFP</h1>;
    }
  };

  const mediaUserBadgeName = () => {
    if (window.innerWidth > 552) {
      return (
        <UserBadge
          nickname={nickname}
          avatarUrl={avatarUrl}
          onClickButton={onClickButton}
          setDownBlock={setDownBlock}
        />
      );
    } else {
      return (
        <UserBadge
          avatarUrl={avatarUrl}
          onClickButton={onClickButton}
          setDownBlock={setDownBlock}
        />
      );
    }
  };

  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (userPopupRef.current && !e.composedPath().includes(userPopupRef.current)) {
        setDownBlock(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const { nickname, avatarUrl, id } = authUser;

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftBlock}>{mediaLogo()}</div>
        {locationPage && (
          <div className={styles.rightBlock}>
            <div className={styles.rightPath}>
              <input className={styles.search} type="search" placeholder="Поиск" />
              <div className={styles.iconsBlock}>
                <Link to="/messages">
                  <img src={ImgMessage} alt="message" />
                </Link>
                <Link to="/posts">
                  <img src={ImgPost} alt="post" />
                </Link>
              </div>
              <div ref={userPopupRef} className={styles.userBadgeHeader}>
                {mediaUserBadgeName()}
              </div>
              {downBlock && (
                <div onClick={onClickCloseButton} className={styles.downContent}>
                  <Link to="/account">
                    <span>Профиль</span>
                  </Link>
                  <Link to="/settings">
                    <span>Настройки</span>
                  </Link>
                  <Link to="/settings/help">
                    <span>Помощь</span>
                  </Link>
                  <Link to="/">
                    <span onClick={logoutUser}>Выйти из аккаунта</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
