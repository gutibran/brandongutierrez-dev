import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link, StaticQuery, graphql } from "gatsby"
import SiteLayout from "../components/SiteLayout"

const shortcodes = { Link } // Provide common components here

export default function PageTemplate() {
	return (
		<StaticQuery
			query={graphql`
				query episodesQuery($id: String) {
					mdx(id: { eq: $id }) {
						id
						body
						frontmatter {
							title
							slug
							url
						}
					}
				}
			`}
				// add backtracks podcast player here and insert timestamps and synopsis.
				render={data => (
				<SiteLayout>
					<h1>{data.mdx.frontmatter.title}</h1>
					<a href={data.mdx.frontmatter.url} download>
						Mp3
					</a>
					<MDXProvider components={shortcodes}>
						<MDXRenderer>{data.mdx.body}</MDXRenderer>
					</MDXProvider>
    			</SiteLayout>
				)
			} 
		/>
	)
}