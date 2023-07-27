import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import Edit from '../@assets/IconsSettings/edit.png';
import Pass from '../@assets/IconsSettings/pass.png';
import Locked from '../@assets/IconsSettings/locked.png';
import Notification from '../@assets/IconsSettings/notifications.png';
import Info from '../@assets/IconsSettings/info.png';
import Caution from '../@assets/IconsSettings/caution.png';

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
              <img src={Edit} alt="1" />
            </li>
          </Link>
          <Link to="/settings/password">
            <li>
              <img src={Pass} alt="2" />
            </li>
          </Link>
          <Link to="/settings/privacy&security">
            <li>
              <img src={Locked} alt="3" />
            </li>
          </Link>
          <Link to="/settings/notifications">
            <li>
              <img src={Notification} alt="4" />
            </li>
          </Link>
          <Link to="/settings/report&problem">
            <li>
              <img src={Info} alt="5" />
            </li>
          </Link>
          <Link to="/settings/help">
            <li>
              <img src={Caution} alt="6" />
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
