import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';

import styles from './Registration.module.scss';
import { setUser } from 'redux/slices/userSlice';

const RegistrationBlock = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const navigate = useNavigate();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    console.log(auth, 'auth');
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user, 'us');
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          }),
        );
        navigate('/');
      })
      .catch(console.error);
  };

  return (
    <div className={styles.registrationBlock}>
      <div className={styles.upBlock}>
        <h1 className={styles.logo}>My Favourite Pets</h1>
        <p>Скорее регистрируйся,чтобы смотреть самые свежие актуальные фото и видео</p>
      </div>
      <div className={styles.row}>
        <div className={styles.formGroup}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Моб.телефон или почта"
          />
          <input type="text" placeholder="Имя и фамилия" />
          <input type="text" placeholder="Имя пользователя" />
          <input
            type="passowrd"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Пароль"
          />
          <button
            onClick={() => handleRegister(email, pass)}
            className={styles.btnForm}
            type="submit"
          >
            Продолжить
          </button>
        </div>
        <div className={styles.enterBlock}>
          <Link to="https://vk.com" target="blank">
            <img src="img/icons/icon-vk.png" className={styles.iconVk} alt="icon_vk" />
            Войти через Вконтакте
          </Link>
          <p className={styles.enter}>
            У Вас уже есть аккаунт?<Link to='/'>Войти</Link>
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
