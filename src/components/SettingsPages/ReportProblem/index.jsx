import React from 'react';

import styles from './ReportProblem.module.scss';

const ReportProblem = () => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <h2>Если у Вас возникли проблемы, то пожалуйста сообщите нам на почту</h2>
        <input placeholder="Введите свою почту" />
        <button>Отправить</button>
      </div>
    </div>
  );
};

export default ReportProblem;
