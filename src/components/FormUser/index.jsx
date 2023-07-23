import React from 'react';

import styles from './FormUser.module.scss';

const FormUser = ({text, textPass, pass, email, setPass, setEmail }) => {
  const [passwordShown, setPasswordShown] = React.useState(false);
  const passRef = React.useRef(null);

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  React.useEffect(() => {
    passRef.current.focus();
  }, [passwordShown]);

  return (
    <div className={styles.formGroup}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={text}
      />
      <div className={styles.passWrapper}>
        <input
          ref={passRef}
          type={passwordShown ? 'text' : 'password'}
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder={textPass}
        />
        <img
          onClick={togglePasswordVisiblity}
          src={passwordShown ? 'img/icons/not-eye.png' : 'img/icons/eye.png'}
          alt="eye"
        />
      </div>
    </div>
  );
};

export default FormUser;
