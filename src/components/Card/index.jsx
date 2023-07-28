import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import PhotoModal from 'components/PhotoModal';

import styles from '../PhotoBlock/PhotoBlock.module.scss';

const Card = ({ imgUrl, comments, avatarUrl, userName }) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const isMobile = typeof window !== 'undefined' && window.innerWidth > 767;
  const navigate = useNavigate();

  const onClickModalPosts = () => {
    if (isMobile) {
      setIsModalVisible(true);
    } else {
      setIsModalVisible(false);
      navigate('/postsByUser');
    }
  };

  return (
    <>
      <div onClick={onClickModalPosts} className={styles.photoWrap}>
        <div className={styles.photo}>
          <img src={imgUrl} alt="a" />
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
