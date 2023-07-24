import React from 'react';

import styles from './PrivacySecurity.module.scss';

const PrivacySecurity = () => {
  return (
    <div className={styles.root}>
      <div className={styles.contentPrivacy}>
        <h2>Конфиденциальность аккаунта</h2>
        <input type="checkbox" name="scales" />
        <label htmlFor="scales">Закрытый аккаунт</label>
        <p>
          Если у Вас закрытый аккаунт, то ваши фото и видео смогут видеть те люди, которых вы
          одобрите.
        </p>
      </div>
      <div className={styles.contentPrivacy}>
        <h2>Статус "В Сети"</h2>
        <input type="checkbox" name="scales" />
        <label htmlFor="scales">Показывать Вас онлайн</label>
        <p>Разрешите всем видеть когда Вы находитесь онлайн</p>
      </div>
      <div className={styles.contentPrivacy}>
        <h2>Комментарии</h2>
        <input type="checkbox" name="scales" />
        <label htmlFor="scales">Показывать комментарии</label>
        <p>Разрешите показывать Ваши комментарии другим пользователям</p>
      </div>
      <div className={styles.contentPrivacy}>
        <h2>Упоминания</h2>
        <h4>Разрешить упоминания от</h4>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '7px' }}>
            <input type="radio" name="scales" />
            <label htmlFor="scales">Всех</label>
          </div>
          <div>
            <input type="radio" name="scales" />
            <label htmlFor="scales">Никто</label>
          </div>
        </div>
        <p>Разрешите показывать Ваши комментарии другим пользователям</p>
      </div>
    </div>
  );
};

export default PrivacySecurity;
