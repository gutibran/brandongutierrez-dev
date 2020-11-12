import React from "react"
import { Link, StaticQuery } from "gatsby"

const Header = () => {
    return (
        <StaticQuery
          query={graphql`
          query MyQuery {
            file(relativePath: {eq: "brandon_gutierrez_resume.pdf"}) {
              id
              publicURL
            }
          }
        `}
        render={data => (
            <header>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Brandon Gutierrez</Link>
                            </li>
                            <li>
                                <a href={data.file.publicURL} target="_blank">Resume</a>
                            </li>
                            <li>
                                <Link to="/projects">Projects</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
        )}/>
    )
}

export default Header