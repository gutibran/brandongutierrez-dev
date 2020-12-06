import React from "react"
import styled, { keyframes } from "styled-components"

const OtherStyledLayout = styled.div`

`

const SiteLayout = ({ children }) => {
    return (
        <OtherStyledLayout>
          {children}
        </OtherStyledLayout>
    )
}

export default SiteLayout