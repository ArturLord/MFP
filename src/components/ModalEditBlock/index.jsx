import React from 'react';

import styles from './ModalEditBlock.module.scss';
import { Link } from 'react-router-dom';

const ModalEditBlock = ({ visibleModalEdit, closeModal }) => {
  return (
    <div className={visibleModalEdit ? styles.modalVisible : styles.modal}>
      <div className={styles.modalDialog}>
        <div className={styles.modalContent}>
          <Link to='/settings/password'>
            <span>Сменить пароль</span>
          </Link>
          <Link to='/settings/privacy&security'>
            <span>Конфинденциальность и безопасность</span>
          </Link>
          <Link to='/settings/notifications'>
            <span>Уведомления</span>
          </Link>
          <Link to='/settings/report&problem'>
            <span>Сообщить о проблеме</span>
          </Link>
          <Link>
            <span>QR-Code</span>
          </Link>
          <Link to="/">
            <span>Выйти</span>
          </Link>
          <Link>
            <span onClick={closeModal}>Отмена</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModalEditBlock;
