import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => (
  <div>
    <h1>About the Author</h1>
   <p>Welcome to my Gatsby site.</p>

    <p>My name is Baruch Phillips and I am a software developer in NYC.</p>
    <Img fixed={data.file.childImageSharp.fixed} />
  </div>
)
export const query = graphql`
  query {
    file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 175, height: 175) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`