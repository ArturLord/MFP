import React from 'react';

import styles from './Messages.module.scss'

const MessagesBlock = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftBlock}>
        <header>
          <input type="text" placeholder="Поиск" />
        </header>
        <ul>
          <li>
            <img
              src="https://avatars.mds.yandex.net/get-yapic/31078/1VamIaa09504Ijn3RbCt8ZDKAeU-1/islands-68"
              alt=""
            />
            <div>
              <h2>ricky_one</h2>
              <h3>
                <span className={`${styles.status} ${styles.orange}`}></span>
                offline
              </h3>
            </div>
          </li>
          <li>
            <img
              src="https://sun9-68.userapi.com/impf/c624617/v624617742/3979b/EfMXs1-2vgM.jpg?size=130x130&quality=96&sign=7c44723bbdf6deee20cd07efe589bfe7&c_uniq_tag=pA8G7qZgeMPbfChs1xxEUS1hO2fKIAl-6DTcvfO-ad0&type=album"
              alt=""
            />
            <div>
              <h2>archikkk</h2>
              <h3>
                <span className={`${styles.status} ${styles.green}`}></span>
                online
              </h3>
            </div>
          </li>
          <li>
            <img
              src="https://sun6-20.userapi.com/s/v1/ig2/tqOJR0z_egQao9CS77ppDJC0ov_8kYqMVFSHsoD5Ig13tpQ_wwc2t6RlBYoddDD-g1iIiosdAvhF3aY4FbBObpFt.jpg?size=50x50&quality=96&crop=19,0,761,761&ava=1"
              alt=""
            />
            <div>
              <h2>bonny_m</h2>
              <h3>
                <span className={`${styles.status} ${styles.orange}`}></span>
                offline
              </h3>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.rightBlock}>
        <header>
          <img
            src="https://sun9-68.userapi.com/impf/c624617/v624617742/3979b/EfMXs1-2vgM.jpg?size=130x130&quality=96&sign=7c44723bbdf6deee20cd07efe589bfe7&c_uniq_tag=pA8G7qZgeMPbfChs1xxEUS1hO2fKIAl-6DTcvfO-ad0&type=album"
            alt=""
          />
          <div className={styles.headerText}>
            <h2>Чат с archikkk</h2>
            <h3>Всего 535 сообщений</h3>
          </div>
          {/* <img src="https://www.flaticon.com/free-icon/star_2107957" alt="" /> */}
        </header>
        <ul className={styles.chat}>
          <li className={styles.you}>
            <div className={styles.head}>
              <span className={`${styles.status} ${styles.green}`}></span>
              <h2>ezhic_x</h2>
              <h3>10:12, Сегодня</h3>
            </div>
            <div className={`${styles.triangle} ${styles.triangleYou}`}></div>
            <div className={`${styles.message} ${styles.green}`}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
              dolor.
            </div>
          </li>
          <li className={styles.me}>
            <div className={styles.head}>
              <h3>10:12, Сегодня</h3>
              <h2>archikkk</h2>
              <span className={`${styles.status} ${styles.blue}`}></span>
            </div>
            <div className={`${styles.triangle} ${styles.triangleMe}`}></div>
            <div className={`${styles.message} ${styles.blue}`}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
              dolor.
            </div>
          </li>
          <li className={styles.me}>
            <div className={styles.head}>
              <h3>10:12, Сегодня</h3>
              <h2>archikkk</h2>
              <span className={`${styles.status} ${styles.blue}`}></span>
            </div>
            <div className={`${styles.triangle} ${styles.triangleMe}`}></div>
            <div className={`${styles.message} ${styles.blue}`}>
             Ок
            </div>
          </li>
          <li className={styles.you}>
            <div className={styles.head}>
              <span className={`${styles.status} ${styles.green}`}></span>
              <h2>ezhic_x</h2>
              <h3>10:12, Сегодня</h3>
            </div>
            <div className={`${styles.triangle} ${styles.triangleYou}`}></div>
            <div className={`${styles.message} ${styles.green}`}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
              dolor.
            </div>
          </li>
          <li className={styles.me}>
            <div className={styles.head}>
              <h3>10:12, Сегодня</h3>
              <h2>archikkk</h2>
              <span className={`${styles.status} ${styles.blue}`}></span>
            </div>
            <div className={`${styles.triangle} ${styles.triangleMe}`}></div>
            <div className={`${styles.message} ${styles.blue}`}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
              dolor.
            </div>
          </li>
          <li className={styles.me}>
            <div className={styles.head}>
              <h3>10:12, Сегодня</h3>
              <h2>archikkk</h2>
              <span className={`${styles.status} ${styles.blue}`}></span>
            </div>
            <div className={`${styles.triangle} ${styles.triangleMe}`}></div>
            <div className={`${styles.message} ${styles.blue}`}>
             Good
            </div>
          </li>
        </ul>
        <div className={styles.footer}>
          <textarea placeholder="Ваше сообщение..."></textarea>
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_picture.png" alt="" />
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_file.png" alt="" />
          <a href="#">Отправить</a>
        </div>
      </div>
    </div>
  );
};

export default MessagesBlock;
