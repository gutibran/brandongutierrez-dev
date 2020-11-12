import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import ResumePDF from "../../static/brandon_gutierrez_resume.pdf"

// From the inside out of the navbar and header
const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  font-family: Roboto;
  padding: 1rem;
  color: black;
  font-size: 1.2rem;
  
`
const NameLink = styled(props => <Link {...props} />)`
  font-family: Roboto;
  font-weight: 700;
  padding: 1rem;
  color: black;
  font-size: 1.5rem;
  text-decoration: none;

`
const StyledA = styled.a`
  text-decoration: none;
  font-family: Roboto;
  font-size: 1.2rem;
  color: black;
  
`
const StyledLi = styled.li`
  margin: 0 0.5rem;
  padding: 1rem;
`
const StyledUl = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledHeader = styled.header`
`

const Header = () => {
    return (
        <StyledHeader>
                <StyledNav>
                    <NameLink to="/" >Brandon Gutierrez</NameLink>
                    <StyledUl>
                        <StyledLi>
                            <StyledA href={ResumePDF
                            } target="_blank" rel="noreferrer">Resume</StyledA>
                        </StyledLi>
                        <StyledLi>
                            <StyledLink to="/projects">Projects</StyledLink>
                        </StyledLi>
                        <StyledLi>
                            <StyledLink to="/contact">Contact</StyledLink>
                        </StyledLi>
                    </StyledUl>
                </StyledNav>
            </StyledHeader>
    )
}

export default Header