import React from 'react';

import styles from './PhotoBlock.module.scss';
import Card from '../Card';
import { AppContext } from '../../App';

const PhotoBlock = ({ imgUrl }) => {

  const { photoPost } = React.useContext(AppContext);

  return (
    <>
      <div className={styles.containerBlock}>
        <div className={styles.contentPhoto}>
         {
          photoPost?.map(obj => <Card key={obj.id} imgUrl={obj.imgUrl}/>)
         }
        </div>
      </div>
    </>
  );
};

export default PhotoBlock;
