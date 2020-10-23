import React from "react"
import Header from "./Header"
import Footer from "./Footer"

const SiteLayout = ({ children }) => {
    return (
        <>
          <Header />
          {children}
          <Footer />
        </>
    )
}

export default SiteLayout