import React from "react"
import ContentLoader from "react-content-loader"
import styles from './LoaderPhoto.module.scss'

const LoaderPhoto = (props) => (
  <ContentLoader 
  className={styles.root}
    speed={2}
    width={240}
    height={240}
    viewBox="0 0 273 280"
    backgroundColor="#e6e6e6"
    foregroundColor="#d7d6d6"
    {...props}
  >
    <rect x="-12" y="0" rx="0" ry="0" width="273" height="280" />
  </ContentLoader>
)

export default LoaderPhoto;