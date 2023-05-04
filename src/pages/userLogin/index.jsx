import React from 'react';
import { Link } from 'react-router-dom';

import styles from './userLogin.module.scss';

const UserLoginBlock = () => {
  return (
    <div className={styles.userBlock}>
      <div className={styles.leftBlock}>
        <div className={styles.picturesSlide}>
          <img src="img/pictures-slide/cat.jpg" alt="cat" />
          <img src="img/pictures-slide/dog.jpg" alt="dog" />
          <img src="img/pictures-slide/hare.jpg" alt="hare" />
          <img src="img/pictures-slide/fox.jpg" alt="fox" />
        </div>
      </div>
      <div className={styles.rightBlock}>
        <div className={styles.userLoginBlock}>
          <h1 className={styles.userLogo}>My Favourite Pets</h1>
          <div className={styles.row}>
            <div className={styles.formGroup}>
              <input type="text" id="name" placeholder="Имя пользователя" />
              <input type="current-passowrd" id="password" placeholder="Пароль" />
              <input className={styles.btnForm} type="submit" value="Войти" />
              <a href="#" />
            </div>
          </div>
          <div className={styles.enterBlock}>
            <a  href="https://vk.com" target="blank">
              <img className={styles.iconVk} src="img/icons/icon-vk.png" alt="icon_vk" />
              Войти через Вконтакте
            </a>
            <p>ИЛИ</p>
            <Link to='/registration' className={styles.registration}>
              Зарегистрируйтесь
            </Link>
            <p className={styles.enterBlockP}>Скачать наше приложение можно</p>
          </div>
          <div className={styles.linkApplications}>
            <a href="https://www.apple.com/ru/app-store/" target="blank">
              <img src="img/icons/appstore.png" alt="app_store" />
            </a>
            <a href="https://store.google.com/account?pli=1">
              <img src="img/icons/googleplay.png" alt="google_play" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLoginBlock;
