import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader
    speed={1.5}
    width={355}
    height={331}
    viewBox="0 0 355 331"
    backgroundColor="#bababa"
    foregroundColor="#ffffff"
    {...props}
  >
    <rect x="111" y="17" rx="9" ry="9" width="130" height="15" /> 
    <rect x="0" y="40" rx="0" ry="0" width="350" height="158" /> 
    <rect x="0" y="212" rx="0" ry="0" width="350" height="40" /> 
    <rect x="118" y="262" rx="11" ry="11" width="113" height="21" /> 
    <rect x="0" y="291" rx="0" ry="0" width="350" height="40" />
  </ContentLoader>
)

export default Skeleton