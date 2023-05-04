import React from 'react';

import styles from '../PhotoBlock/PhotoBlock.module.scss';

const Card = ({imgUrl}) => {
  return (
    <div className={styles.photoWrap}>
      <div className={styles.photo}>
      <img src={imgUrl} alt="a" />
    </div>
    </div>
  );
};

export default Card;
