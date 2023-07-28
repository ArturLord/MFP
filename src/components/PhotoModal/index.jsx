import React from 'react';
import Modal from 'react-modal';

import UserBadge from 'components/UserBadge';
import Comment from 'components/Comment';

import styles from './PhotoModal.module.scss';

const PhotoModal = ({ isOpen, onClose, imgUrl, comments, nickname, avatarUrl }) => {
 
  React.useEffect(() => {
    const body = document.querySelector('body');
    if (isOpen) {
      body.classList.add(styles.bodyOverflow);
    } else {
      body.classList.remove(styles.bodyOverflow);
    }
  
    return () => {
      body.classList.remove(styles.bodyOverflow);
    };
  }, [isOpen]);

  return (
    <Modal
      className={styles.modal}
      overlayClassName={styles.modalOverlay}
      isOpen={isOpen}
      ariaHideApp={false}
      onRequestClose={onClose}
    >
      <div className={styles.modalRoot}>
        <div className={styles.leftBlock}>
          <img className={styles.modalImage} src={imgUrl} alt="modal" />
        </div>
        <div className={styles.rightBlock}>
          <div>
            <div className={styles.modalHeader}>
              <UserBadge nickname={nickname} avatarUrl={avatarUrl} />
            </div>

            <div className={styles.modalComments}>
              {comments.map((comment, i) => (
                <Comment key={i} {...comment} />
              ))}
            </div>
          </div>
          <div>
            <div className={styles.modalIcons}>
              {/* <img src="img/icons/noliked.png" alt="" /> */}
            </div>
            <div className={styles.footerModal}>
              <textarea placeholder="Ваше сообщение..."></textarea>
              <button>Отправить</button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PhotoModal;
