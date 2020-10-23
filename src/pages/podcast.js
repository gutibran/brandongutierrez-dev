import React from "react"
import { Link, graphql } from "gatsby"
import SiteLayout from "../components/SiteLayout"

const Podcast = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <SiteLayout>
      <h1>Podcasts</h1>
      <ul>
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <Link to={post.frontmatter.slug}>
              <h2>{post.frontmatter.title}</h2>
            </Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </SiteLayout>
  )
}

export const pageQuery = graphql`
  query Podcast {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`

export default Podcast