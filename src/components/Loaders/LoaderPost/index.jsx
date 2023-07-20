import React from 'react';
import ContentLoader from 'react-content-loader';

import styles from './LoaderPost.module.scss';

const LoaderPost = (props) => (
  <ContentLoader
    className={styles.root}
    speed={2}
    width={600}
    height={584}
    viewBox="0 0 600 584"
    backgroundColor="#e6e6e6"
    foregroundColor="#d7d6d6"
    {...props}
  >
    <circle cx="38" cy="33" r="17" />
    <rect x="63" y="28" rx="10" ry="10" width="93" height="17" />
    <rect x="-1" y="65" rx="0" ry="0" width="601" height="297" />
    <rect x="12" y="375" rx="5" ry="5" width="22" height="24" />
    <rect x="46" y="375" rx="5" ry="5" width="22" height="24" />
    <rect x="11" y="418" rx="10" ry="10" width="140" height="14" />
    <rect x="15" y="445" rx="10" ry="10" width="209" height="16" />
    <rect x="15" y="468" rx="10" ry="10" width="137" height="15" />
    <rect x="518" y="550" rx="5" ry="5" width="77" height="27" />
  </ContentLoader>
);

export default LoaderPost;
