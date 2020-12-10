import React from "react"
// import Header from "./Header"
// import Footer from "./Footer"
import styled, { createGlobalStyle, keyframes } from "styled-components"

const BackgroundAnimation = keyframes`
  0% {
    background-color: #36454F;
  }

  50% {
    background-color: #1B1B1B;
  }

  100% {
    background-color: #36454F;
  }
`

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #FFF;
  }
  
  body {
    animation-name: ${BackgroundAnimation};
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
`

const OtherSiteLayoutContainer = styled.div`
  @media (min-width: 768px) {
    margin: 0 25vw;
  }
`

const OtherSiteLayout = ({ children }) => {
    return (
      <OtherSiteLayoutContainer>
        <GlobalStyle />
        {children}
      </OtherSiteLayoutContainer>
    )
}

export default OtherSiteLayout