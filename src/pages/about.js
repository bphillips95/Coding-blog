import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => (

  <div 
  style={{
    "text-align": "center"
  }}   
  >
    <h1>About the Author</h1>
    
   <p>Welcome to my Gatsby site.</p>

    <p>My name is Baruch Phillips and I am a software developer in NYC.
      <br/>
    I have experience using Ruby on Rails, Javascript and React/Redux.
    <br/>
    <br/>
    <a href="https://learn.co/bphillips/resume">Check out my Resume</a> 
    <br/>
     For any inquiries or job opportunities please reach out to me on <a href={`https://linkedin.com/in/${data.site.siteMetadata.social.linkedin}`}>Linkedin</a>.</p>

    <Img fixed={data.file.childImageSharp.fixed} className="center" />
  
    <br/>
    <a href={`https://medium.com/@baruchphillips`}>Check out my Blog on Medium</a>
    <br/>
    <a href={`https://github.com/bphillips95`}>Check out my GitHub</a> 
    <br/>
    <br/>
    <Link to="/">Home</Link>
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
    site {
      siteMetadata {
        author {
          name
          summary
        }
        social {
          linkedin
        }
      }
    }
  }
`