import React from 'react';

import styles from './Help.module.scss';

const Help = () => {
  return (
    <div className={styles.root}>
      <h2>Помощь</h2>
      <div className={styles.content}>
        <p>Этот блок пока не готов</p>
        <img src="/img/pepes.png" alt="pepe" />
      </div>
    </div>
  );
};

export default Help;
