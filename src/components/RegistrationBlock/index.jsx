import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';

import styles from './Registration.module.scss';
import { setUser } from 'redux/slices/userSlice';
import FormUser from 'components/FormUser';

const RegistrationBlock = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');

  const handleRegister = (email, password) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
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
         <FormUser pass={pass} setPass={setPass} email={email} setEmail={setEmail}/>
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
