import React from "react"
import ContentLoader from "react-content-loader"

const LoaderProfil = (props) => (
  <ContentLoader 
    speed={2}
    width={610}
    height={225}
    viewBox="0 0 610 230"
    backgroundColor="#cecccc"
    foregroundColor="#d7d6d6"
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
)

export default LoaderProfil;