import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"


const BlogPost = ({ data }) => (
    <div>
        <h1>
            {data.mdx.frontmatter.title}
        </h1>
        <MDXRenderer>
            {data.mdx.body}
        </MDXRenderer>
    </div>
)

export default BlogPost

export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    body
    frontmatter {
      title
      slug
      date
    }
  }
}
`
