import React from 'react';
import { useSelector } from 'react-redux';

import PhotoModal from 'components/PhotoModal';

import styles from '../PhotoBlock/PhotoBlock.module.scss';

const Card = ({ imgUrl, comments, avatarUrl, userName }) => {
  const status = useSelector((state) => state.postsUser.status);
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  return (
    <>
      <div onClick={() => setIsModalVisible(true)} className={styles.photoWrap}>
        <div className={styles.photo}>
          {status === 'loading' ? (
            <div className={styles.rootLoader}></div>
          ) : (
            <img src={imgUrl} alt="a" />
          )}
        </div>
      </div>
      <PhotoModal
        isOpen={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        comments={comments}
        nickname={userName}
        avatarUrl={avatarUrl}
        imgUrl={imgUrl}
      />
    </>
  );
};

export default Card;
