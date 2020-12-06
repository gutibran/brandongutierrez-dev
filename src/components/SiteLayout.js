import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import { createGlobalStyle, keyframes } from "styled-components"

const BackgroundAnimation = keyframes`
  0% {
    background-color: #FFFFFF;
  }

  35% {
      color: white;
  }
  
  50% {
      background-color: #1b1b1b;
  }

  100% {
      background-color: #FFFFFF;
  }
`

const GlobalStyle = createGlobalStyle`
  body {
    animation-name: ${BackgroundAnimation};
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    background-color: yellow;
  }
`

const SiteLayout = ({ children }) => {
    return (
      <React.Fragment>
      <GlobalStyle>
          <Header />
          {children}
          <Footer />
      </GlobalStyle>
      </React.Fragment>
    )
}

export default SiteLayout