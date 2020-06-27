import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <div>
      <h1>Latest Posts</h1>
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
          <h3>{post.node.frontmatter.title}</h3>
          <small>
            Posted by {post.node.frontmatter.author} on{' '}
            {post.node.frontmatter.date}
          </small>
          <br /><br />
          <Link to={post.node.frontmatter.path}>Read More</Link>
          <br/><br/><br/>
        </div>
    ))}
  </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`
// id
// frontmatter {}  markdown --- arasındakilere bakar
// excerpt markdown içeriği verir

export default BlogPage
