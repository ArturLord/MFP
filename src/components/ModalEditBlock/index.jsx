import React from 'react';

import { Link } from 'react-router-dom';

import styles from './ModalEditBlock.module.scss';
import { useDispatch } from 'react-redux';
import { removeUser } from 'redux/slices/userSlice';

const ModalEditBlock = ({ visibleModalEdit, closeModal }) => {
  const dispatch = useDispatch();

  const logoutUser = () => {
    sessionStorage.removeItem('auth');
    dispatch(removeUser());
  };

  return (
    <div className={visibleModalEdit ? styles.modalVisible : styles.modal}>
      <div className={styles.modalDialog}>
        <div className={styles.modalContent}>
          <Link to="/settings/password">
            <span>Сменить пароль</span>
          </Link>
          <Link to="/settings/privacy&security">
            <span>Конфинденциальность и безопасность</span>
          </Link>
          <Link to="/settings/notifications">
            <span>Уведомления</span>
          </Link>
          <Link to="/settings/report&problem">
            <span>Сообщить о проблеме</span>
          </Link>
          <Link>
            <span>QR-Code</span>
          </Link>
          <Link to="/">
            <span onClick={logoutUser}>Выйти</span>
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
