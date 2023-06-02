import React from 'react';

import styles from './PhotoBlock.module.scss';
import Card from '../Card';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Shelf from '../Hf-shelf';
import { useSelector } from 'react-redux';
import Loader from 'components/Loader';

const PhotoBlock = ({postsByUser }) => {
  const {status} = useSelector(state => state.postsUser)
  // if (!posts) {
  //   return <Shelf/>
  // }

  return (
    <>
      <div className={styles.containerBlock}>
        <Tabs className={styles.tabs}>
          <TabList className={styles.tabList}>
            <Tab
              selectedClassName={styles.activeTab}
              className={`${styles.tab} ${styles.tabActive}`}
            >
              Фотографии
            </Tab>
            <Tab selectedClassName={styles.activeTab} className={styles.tab}>
              Отметки
            </Tab>
            <Tab selectedClassName={styles.activeTab} className={styles.tab}>
              Закладки
            </Tab>
          </TabList>

          <TabPanel>
            <div className={styles.contentPhoto}>
            {status === 'loading' ? <Loader/> : postsByUser?.map(({ author, imgUrl, comments, id }) => (
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
            <div className={styles.contentPhoto}>

                  {status === 'loading' ? <Loader/> : postsByUser?.map(({ author, imgUrl, comments, id }) => (
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
            <div className={styles.contentPhoto}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet minima ratione non
                iste aperiam illum ipsam cumque aliquid, odio hic!
              </p>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default PhotoBlock;
