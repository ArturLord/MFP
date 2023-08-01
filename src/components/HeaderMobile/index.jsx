import React from 'react';

import { Link } from 'react-router-dom';

import ImgBack from '../@assets/icons/back.png'
import ImgDots from '../@assets/icons/dots.png'

import styles from './HeaderMobile.module.scss';

const HeaderMobile = () => {
  const userPopupRef = React.useRef();
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
    <div className={styles.root}>
      <Link to="/account">
        <img src={ImgBack} alt="" />
      </Link>
      <img ref={userPopupRef} onClick={onClickButton} src={ImgDots} alt="" />
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
            <span>Выйти из аккаунта</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default HeaderMobile;