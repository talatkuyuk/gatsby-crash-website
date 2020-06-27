import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({ data }) {

  //const post = data.markdownRemark
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <SEO title="Blog: " />
      <div>
        <Link to="/blog">Go Back</Link>
        <hr />
        <h1>{frontmatter.title}</h1>
        <h4>
          Posted by {frontmatter.author} on {frontmatter.date}
        </h4>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>

  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`
