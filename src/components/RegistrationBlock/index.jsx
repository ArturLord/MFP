import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Registration.module.scss';

const RegistrationBlock = () => {
  return (
    <div className={styles.registrationBlock}>
      <div className={styles.upBlock}>
        <h1 className={styles.logo}>My Favourite Pets</h1>
        <p>Скорее регистрируйся,чтобы смотреть самые свежие актуальные фото и видео</p>
      </div>
      <div className={styles.row}>
        <div className={styles.formGroup}>
          <input type="text" placeholder="Моб.телефон или почта" />
          <input type="text" placeholder="Имя и фамилия" />
          <input type="text" placeholder="Имя пользователя" />
          <input type="password" placeholder="Пароль" />
          <a href="index.html">
            <input className={styles.btnForm} type="submit" value="Продолжить" />
          </a>
        </div>
        <div className={styles.enterBlock}>
          <Link to="https://vk.com" target="blank">
            <img src="img/icons/icon-vk.png" className={styles.iconVk} alt="icon_vk" />
            Войти через Вконтакте
          </Link>
          <p className={styles.enter}>
            У Вас уже есть аккаунт?<a href="main.html">Войти</a>
          </p>
          <p className={styles.enterBlockP}>Скачать наше приложение можно</p>
        </div>
        <div className={styles.linkApplications}>
          <Link to="https://www.apple.com/ru/app-store/" target="blank">
            <img src="img/icons/appstore.png" alt="app_store" />
          </Link>
          <Link to="#">
            <img src="img/icons/googleplay.png" alt="google_play" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationBlock;
