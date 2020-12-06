import React from "react"
// import Header from "./Header"
// import Footer from "./Footer"
import { createGlobalStyle, keyframes } from "styled-components"

const BackgroundAnimation = keyframes`
  0% {
    background-color: #FFFFFF;
  }

  40% {
    color: #FFFFFF;
  }

  50% {
    background-color: #1B1B1B;
  }

  100% {
    background-color: #FFFFFF;
  }
`

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    animation-name: ${BackgroundAnimation};
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`

const OtherSiteLayout = ({ children }) => {
    return (
      <React.Fragment>
        <GlobalStyle />
        {children}
      </React.Fragment>
    )
}

export default OtherSiteLayout