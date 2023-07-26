import React from 'react';
import { useSelector } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Card from '../Card';

import styles from './PhotoBlock.module.scss';

const PhotoBlock = ({ postsByUser }) => {
  const { status } = useSelector((state) => state.postsUser);
  const isMobile = window.innerWidth > 767;

  if (status === 'error') {
    setTimeout(() => {
      return alert('Произошла ошибка при получении фотографий');
    }, 2000);
  }

  return (
    <>
      <div className={styles.containerBlock}>
        <Tabs className={styles.tabs}>
          <TabList className={styles.tabList}>
            <Tab
              selectedClassName={styles.activeTab}
              className={`${styles.tab} ${styles.tabActive}`}
            >
              <img src="img/icons/feed.png" alt="feed" />
            </Tab>
            <Tab selectedClassName={styles.activeTab} className={styles.tab}>
              <img src="img/icons/mark.png" alt="mark" />
            </Tab>
            <Tab selectedClassName={styles.activeTab} className={styles.tab}>
              <img src="img/icons/bookmark.png" alt="bookmark" />
            </Tab>
          </TabList>

          <TabPanel>
            <div className={styles.contentPhoto}>
              {status === 'loading'
                ? [...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className={isMobile ? styles.rootLoader : styles.rootLoaders}
                    ></div>
                  ))
                : postsByUser?.map(({ author, imgUrl, comments, id }) => (
                    <Card
                      key={id}
                      userName={author.nickname}
                      comments={comments}
                      avatarUrl={author.avatarUrl}
                      imgUrl={imgUrl}
                    />
                  ))}
            </div>
          </TabPanel>
          <TabPanel>
            <p className={styles.bookmarks}>Здесь будут показываться ваши отметки</p>
          </TabPanel>
          <TabPanel>
            <p className={styles.bookmarks}>Здесь будут показываться ваши закладки</p>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default PhotoBlock;
