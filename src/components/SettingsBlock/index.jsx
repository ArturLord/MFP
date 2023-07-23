import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import styles from './SettingsBlock.module.scss';

const SettingsBlock = () => {
  const leftIconsBlock = () => {
    if (window.innerWidth > 768) {
      return (
        <ul>
          <Link to="/settings">
            <li>Редактировать профиль</li>
          </Link>
          <Link to="/settings/password">
            <li>Сменить пароль</li>
          </Link>
          <Link to="/settings/privacy&security">
            <li>Конфинденциальность и безопасность</li>
          </Link>
          <Link to="/settings/notifications">
            <li>Уведомления</li>
          </Link>
          <Link to="/settings/report&problem">
            <li>Сообщить о проблеме</li>
          </Link>
          <Link to="/settings/help">
            <li>Помощь</li>
          </Link>
        </ul>
      );
    } else {
      return (
        <ul>
          <Link to="/settings">
            <li>
              <img src="img/IconsSettings/edit.png" alt="1" />
            </li>
          </Link>
          <Link to="/settings/password">
            <li>
              <img src="img/IconsSettings/pass.png" alt="2" />
            </li>
          </Link>
          <Link to="/settings/privacy&security">
            <li>
              <img src="img/IconsSettings/locked.png" alt="3" />
            </li>
          </Link>
          <Link to="/settings/notifications">
            <li>
              <img src="img/IconsSettings/notifications.png" alt="4" />
            </li>
          </Link>
          <Link to="/settings/report&problem">
            <li>
              <img src="img/IconsSettings/info.png" alt="5" />
            </li>
          </Link>
          <Link to="/settings/help">
            <li>
              <img src="img/IconsSettings/caution.png" alt="6" />
            </li>
          </Link>
        </ul>
      );
    }
  };

  return (
    <div className={styles.content}>
      <div className={styles.leftBlock}>{leftIconsBlock()}</div>
      <div className={styles.rightBlock}>
        <Outlet />
      </div>
    </div>
  );
};

export default SettingsBlock;
