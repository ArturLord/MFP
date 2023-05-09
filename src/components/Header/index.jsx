import React from 'react';

import styles from './Header.module.scss';
import { useLocation, Link } from 'react-router-dom';
import UserBadge from '../UserBadge';
import { removeUser } from 'redux/slices/userSlice';
import { useDispatch } from 'react-redux';

const Header = ({ nickName, avatarUrl }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const locationPage = location.pathname !== '/' && location.pathname !== '/registration';
  const [downBlock, setDownBlock] = React.useState(false);

  const onClickButton = () => {
    setDownBlock(!downBlock);
  };
  const onClickCloseButton = () => {
    setDownBlock(false);
  };

  return (
    <div className={styles.header}>
      <div className={styles.leftBlock}>
        <h1 className={styles.logo}>My Favourite Pets</h1>
      </div>
      {locationPage && (
        <div className={styles.rightBlock}>
          <input className={styles.search} type="search" placeholder="Поиск" />
          <div>
            <div className={styles.iconsBlock}>
              <a href="#">&#128386;</a>
              <Link to="/posts">&#10084;</Link>
            </div>
            <UserBadge
              nickName="Artur"
              avatarUrl="img/icons/vk-icon.png"
              onClickButton={onClickButton}
            />
            {downBlock && (
              <div onClick={onClickCloseButton} className={styles.downContent}>
                <Link to="/account">
                  <span>Профиль</span>
                </Link>
                <Link>
                  <span>Настройки</span>
                </Link>
                <Link>
                  <span>Помощь</span>
                </Link>
                <Link>
                  <span onClick={() => dispatch(removeUser())}>Выйти из аккаунта</span>
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
