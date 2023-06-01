import React from 'react';

import styles from '../PhotoBlock/PhotoBlock.module.scss';
import PhotoModal from 'components/PhotoModal';

const Card = ({imgUrl, comments, avatarUrl, userName}) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  return (
 <>
    <div onClick={() => setIsModalVisible(true)} className={styles.photoWrap}>
      <div className={styles.photo}>
      <img src={imgUrl} alt="a" />
    </div>
    </div>
        <PhotoModal    isOpen={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        comments={comments}
        nickname={userName}
        avatarUrl={avatarUrl}
        imgUrl={imgUrl}/></>
  );
};

export default Card;
