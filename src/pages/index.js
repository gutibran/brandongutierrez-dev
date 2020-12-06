import React from "react"
import styled, { keyframes } from "styled-components"
// import SiteLayout from "../components/SiteLayout"
import OtherSiteLayout from "../components/OtherSiteLayout"
import PhotoSource from "../../static/cursor_edit.png"

const RotationAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`

const PhotoOfMe = styled.img`
  width: 175px;
  height: 175px;
  animation-name: ${RotationAnimation};
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  border-radius: 50%;
  margin: 0 auto;
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: block;
`

const Heading = styled.h1`
  text-align: center;
  font-family: Roboto, sans-serif;
  margin: 2rem;
`

const OtherHeading = styled.h2`
  text-align: center;
  font-family: Roboto, sans-serif;
  margin: 2rem;
  text-decoration: underline;
`

const Index = () => {
  return (
    <OtherSiteLayout>
      <PhotoOfMe src={PhotoSource} alt="Brandon Gutierrez" />
      <Heading>Brandon Gutierrez</Heading>
    </OtherSiteLayout>
  )
}

export default Index