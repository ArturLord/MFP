import React from 'react';
import ContentLoader from 'react-content-loader';

const LoaderProfil = (props) => (
  <ContentLoader
    speed={2}
    width={window.innerWidth > 1024 ? 610 : 300}
    height={window.innerWidth > 1024 ? 225 : 120}
    style={{marginTop: 15}}
    viewBox="0 0 610 230"
    backgroundColor="#cecccc"
    foregroundColor="#c4c0c0"
    {...props}
  >
    <circle cx="110" cy="114" r="78" />
    <rect x="225" y="50" rx="10" ry="10" width="102" height="25" />
    <rect x="340" y="42" rx="7" ry="7" width="191" height="34" />
    <rect x="221" y="96" rx="10" ry="10" width="115" height="16" />
    <rect x="349" y="96" rx="10" ry="10" width="115" height="16" />
    <rect x="473" y="96" rx="10" ry="10" width="115" height="16" />
    <rect x="219" y="128" rx="10" ry="10" width="98" height="17" />
    <rect x="219" y="153" rx="10" ry="10" width="102" height="13" />
    <rect x="217" y="173" rx="10" ry="10" width="174" height="16" />
  </ContentLoader>
);

export default LoaderProfil;
