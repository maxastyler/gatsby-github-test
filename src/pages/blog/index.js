import { graphql, Link } from "gatsby"
import React from "react"

const BlogEntries = ({ data }) => {
    return (<div>
        <ul>
            {data.allFile.nodes.map((node) =>
            (<li><Link to={`/blog/${node.childMdx.slug}`}>{node.childMdx.frontmatter.title}</Link>
                <div>{node.childMdx.frontmatter.date}</div></li>))}
        </ul>
    </div>
    )
}

export default BlogEntries

export const query = graphql`
query {
  allFile(
    filter: {sourceInstanceName: {eq: "blog"}, extension: {eq: "mdx"}}
    sort: {fields: childMdx___frontmatter___date, order: DESC}
  ) {
    nodes {
      childMdx {
slug
        frontmatter {
          title
          date
        }
      }
    }
  }
}
`
