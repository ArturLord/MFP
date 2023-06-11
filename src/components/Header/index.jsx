import React from 'react';

import styles from './Header.module.scss';
import { useLocation, Link } from 'react-router-dom';
import UserBadge from '../UserBadge';
import { removeUser } from 'redux/slices/userSlice';
import { useDispatch } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const userPopupRef = React.useRef();
  const locationPage = location.pathname !== '/' && location.pathname !== '/registration';
  const [downBlock, setDownBlock] = React.useState(false);

  const onClickButton = () => {
    setDownBlock(!downBlock);
  };
  const onClickCloseButton = () => {
    setDownBlock(false);
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

  return (
    <div className={styles.header}>
      <div className={styles.leftBlock}>
        <h1 className={styles.logo}>My Favourite Pets</h1>
      </div>
      {locationPage && (
        <div className={styles.rightBlock}>
          <input className={styles.search} type="search" placeholder="Поиск" />
          <div className={styles.rightPath}>
            <div className={styles.iconsBlock}>
              <Link to="/messages"><img src='img/icons/message.png' alt='message'/></Link>
              <Link to="/posts"><img src='img/icons/post.png' alt='post'/></Link>
            </div>
            <div ref={userPopupRef} className={styles.userBadgeHeader}>
              <UserBadge
                nickname="ezhic_x"
                avatarUrl="https://sun9-69.userapi.com/impf/c849220/v849220565/3a09b/kmYiLjBKaeU.jpg?size=320x400&quality=96&sign=381bad4b0f64aacfc67d4f34a1f3199a&c_uniq_tag=iLToh-14w7RCw3xNSCDGzxiT0tYWVYgup24kmpg4eyQ&type=album"
                onClickButton={onClickButton}
                setDownBlock={setDownBlock}
              />
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
                <Link  to="/">
                  <span >Выйти из аккаунта</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
