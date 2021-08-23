import * as React from "react"
import {Link} from "gatsby"

const IndexPage = () => {
  return (
    <main>
        <title>Home Page</title>
        <p>This is the index</p>
        <Link to="/blog">
            blog
        </Link>
        <br/>
        <Link to="/todo">
            todo
        </Link>
    </main>
  )
}

export default IndexPage
