import React from 'react';

import styles from './PhotoBlock.module.scss';
import Card from '../Card';
import { AppContext } from '../../App';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ProfilBlock from 'components/ProfilBlock';

const PhotoBlock = ({ photos }) => {
  const { photoPost } = React.useContext(AppContext);

  if (!photos) {
    return <ProfilBlock/>
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
              Фотографии
            </Tab>
            <Tab selectedClassName={styles.activeTab} className={styles.tab}>
              Видео
            </Tab>
            <Tab selectedClassName={styles.activeTab} className={styles.tab}>
              Shorts
            </Tab>
          </TabList>

          <TabPanel>
            <div className={styles.contentPhoto}>
              {photoPost?.map(({ author, imgUrl, comments, id }) => (
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

                  {photos?.map(({ author, imgUrl, comments, id }) => (
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
