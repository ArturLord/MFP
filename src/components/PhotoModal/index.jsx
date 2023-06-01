import React from 'react';
import Modal from 'react-modal';

import styles from './PhotoModal.module.scss';
import UserBadge from 'components/UserBadge';
import Comment from 'components/Comment';

const PhotoModal = ({ isOpen, onClose, imgUrl, comments, nickname, avatarUrl }) => {

  React.useEffect(() => {
    const body = document.querySelector('body');
    if (isOpen) {
      body.classList.add(`${styles.bodyOverflow}`);
    } else {
      body.classList.remove(`${styles.bodyOverflow}`);
    }
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
            {comments.map((comment) => (
              <Comment {...comment}/>
            ))}
          </div>
          </div>
          <div>
          <div className={styles.modalIcons}>
            <i className="fa fa-hert" />
            <i />
          </div>
          <div className={styles.footerModal}>
          <textarea placeholder="Ваше сообщение...">
          </textarea>
          <button>Отправить</button>
          </div>
        </div>
        </div>
      </div>
    </Modal>
  );
};

export default PhotoModal;
