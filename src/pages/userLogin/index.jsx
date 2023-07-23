import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { setUser } from 'redux/slices/userSlice';

import FormUser from 'components/FormUser';

import styles from './userLogin.module.scss';

const UserLoginBlock = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          }),
        );
        navigate('/account');
      })
      .catch(() => alert('Пользователь не найден'));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.userBlock}>
      <div className={styles.leftBlock}>
        <div className={styles.picturesSlide}>
          <img src="img/pictures-slide/lion.png" alt="cat" />
          <img src="img/pictures-slide/dog.png" alt="dog" />
          <img src="img/pictures-slide/animal.png" alt="fox" />
        </div>
      </div>
      <div className={styles.rightBlock}>
        <div className={styles.userLoginBlock}>
          <h1 className={styles.userLogo}>My Favourite Pets</h1>
          <div className={styles.row}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <FormUser
                  text="Введите email: qwerty@mail.ru"
                  textPass="Введите пароль: qwerty12"
                  pass={pass}
                  setPass={setPass}
                  email={email}
                  setEmail={setEmail}
                />
                <button
                  onClick={() => handleLogin(email, pass)}
                  className={styles.btnForm}
                  type="submit"
                >
                  Войти
                </button>
              </div>
            </form>
          </div>
          <div className={styles.enterBlock}>
            <a href="https://vk.com" target="blank">
              <img className={styles.iconVk} src="img/icons/icon-vk.png" alt="icon_vk" />
              Войти через Вконтакте
            </a>
            <p>ИЛИ</p>
            <Link to="/registration" className={styles.registration}>
              Зарегистрируйтесь
            </Link>
            <p className={styles.enterBlockP}>Скачать наше приложение можно</p>
          </div>
          <div className={styles.linkApplications}>
            <a href="https://www.apple.com/ru/app-store/" target="blank">
              <img src="img/icons/appstore.png" alt="app_store" />
            </a>
            <a href="https://store.google.com/account?pli=1">
              <img src="img/icons/googleplay.png" alt="google_play" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLoginBlock;
