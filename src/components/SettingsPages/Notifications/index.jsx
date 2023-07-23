import React from 'react';

import styles from './Notifications.module.scss';

const Notifications = () => {
  return (
    <div className={styles.root}>
      <div className={styles.contentPrivacy}>
        <h2>Отметки "Нравятся"</h2>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '7px' }}>
            <input type="radio" name="scales" />
            <label htmlFor="scales">От всех</label>
          </div>
          <div style={{ marginBottom: '7px' }}>
            <input type="radio" name="scales" />
            <label htmlFor="scales">От людей, на которых вы подписаны</label>
          </div>
          <div>
            <input type="radio" name="scales" />
            <label htmlFor="scales">Выкл</label>
          </div>
        </div>
        <p>kotopes нравится ваше фото</p>
      </div>
      <div className={styles.contentPrivacy}>
        <h2>Комментарии</h2>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '7px' }}>
            <input type="radio" name="scales" />
            <label htmlFor="scales">От всех</label>
          </div>
          <div style={{ marginBottom: '7px' }}>
            <input type="radio" name="scales" />
            <label htmlFor="scales">От людей, на которых вы подписаны</label>
          </div>
          <div>
            <input type="radio" name="scales" />
            <label htmlFor="scales">Выкл</label>
          </div>
        </div>
        <p>kotopes прокомментировал ваше фото</p>
      </div>
      <div className={styles.contentPrivacy}>
        <h2>Напоминания</h2>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '7px' }}>
            <input type="radio" name="scales" />
            <label htmlFor="scales">От всех</label>
          </div>
          <div>
            <input type="radio" name="scales" />
            <label htmlFor="scales">Выкл</label>
          </div>
        </div>
        <p>У Вас есть непрочитанные уведомления</p>
      </div>
      <div className={styles.contentPrivacy}>
        <h2>Запросы на подписку</h2>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '7px' }}>
            <input type="radio" name="scales" />
            <label htmlFor="scales">От всех</label>
          </div>
          <div>
            <input type="radio" name="scales" />
            <label htmlFor="scales">Выкл</label>
          </div>
        </div>
        <p>kotopes принял(а) ваш запрос на подписку</p>
      </div>
      <div className={styles.contentPrivacy}>
        <h2>Запросы поддержки</h2>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '7px' }}>
            <input type="radio" name="scales" />
            <label htmlFor="scales">Вкл</label>
          </div>
          <div>
            <input type="radio" name="scales" />
            <label htmlFor="scales">Выкл</label>
          </div>
        </div>
        <p>Ваш запрос на поддржку был обновлен</p>
      </div>
    </div>
  );
};

export default Notifications;
