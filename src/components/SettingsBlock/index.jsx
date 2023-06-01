import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './SettingsBlock.module.scss';
import EditProfil from 'components/SettingsPages/EditProfil';

const SettingsBlock = () => {
  return (
    <div className={styles.content}>
      <div className={styles.leftBlock}>
        <ul>
          <Link to='/settings'>
            <li>Редактировать профиль</li>
          </Link>
          <Link to='/settings/password'>
            <li>Сменить пароль</li>
          </Link>
          <Link to='/settings/privacy&security'>
            <li>Конфинденциальность и безопасность</li>
          </Link>
          <Link to='/settings/notifications'>
            <li>Уведомления</li>
          </Link>
          <Link to='/settings/report&problem'>
            <li>Сообщить о проблеме</li>
          </Link>
          <Link to='/settings/help'>
            <li>Помощь</li>
          </Link>
        </ul>
      </div>
      <div className={styles.rightBlock}>
        <Outlet/>
      </div>
    </div>
  );
};

export default SettingsBlock;
