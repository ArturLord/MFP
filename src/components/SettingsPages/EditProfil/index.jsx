import React from 'react';

import UserBadge from 'components/UserBadge';

import styles from './EditProfil.module.scss';
import { useSelector } from 'react-redux';

const EditProfil = () => {

  const { authUser } = useSelector((state) => state.user);

  return (
    <div className={styles.root}>
      <div className={styles.contentEdit}>
        <div className={styles.photoBadge}>
          <UserBadge nickname={authUser.nickname} avatarUrl={authUser.avatarUrl} />
          <p>Загрузите фото профиля</p>
        </div>
        <div className={styles.pass}>
          <div>
            <label>Ваше имя</label>
            <label>Имя пользователя</label>
            <label>Почта</label>
            <label>Телефон</label>
            <label>О себе</label>
          </div>
          <div>
            <input placeholder="Ваше имя" />
            <input placeholder="Введите имя пользователя" />
            <input placeholder="Введите почту" />
            <input placeholder="Введите номер телефона" />
            <textarea placeholder="Расскажите о себе" />
          </div>
        </div>
        <button className={styles.editPassBtn}>Подтвердить изменения</button>
      </div>
    </div>
  );
};

export default EditProfil;
