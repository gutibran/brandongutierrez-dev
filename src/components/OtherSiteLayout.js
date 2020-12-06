import React from "react"
import styled, { keyframes } from "styled-components"

const OtherStyledLayout = styled.div`
    height: 100vh;
    width: 100vw;
`

const SiteLayout = ({ children }) => {
    return (
        <OtherStyledLayout>
          {children}
        </OtherStyledLayout>
    )
}

export default SiteLayout