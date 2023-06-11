import React from 'react';

import styles from './FormUser.module.scss';

const FormUser = ({ pass, email, setPass, setEmail }) => {
  const [passwordShown, setPasswordShown] = React.useState(false);

  const passRef = React.useRef(null);

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);

    passRef.current.focus();
  };

  return (
    <div className={styles.formGroup}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Введите email"
      />
      <div className={styles.passWrapper}>
        <input
          ref={passRef}
          type={passwordShown ? 'text' : 'password'}
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Пароль"
        />
        <img onClick={togglePasswordVisiblity} src="img/icons/eye.png" alt="eye" />
      </div>
    </div>
  );
};

export default FormUser;
