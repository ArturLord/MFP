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
            <label className={styles.editLabel}>Ваше имя</label>
            <label className={styles.editLabel}>Имя пользователя</label>
            <label className={styles.editLabel}>Почта</label>
            <label className={styles.editLabel}>Телефон</label>
            <label className={styles.editLabel}>О себе</label>
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
