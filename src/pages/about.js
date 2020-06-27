import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About Page" />
    <h1>About Page</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit debitis fuga sint rerum dolor minus est illo. Quos, voluptates odio nihil facere voluptas ipsum repellat dolor maxime, ipsa nemo voluptatibus exercitationem! Recusandae cumque, labore culpa facilis eligendi quae dicta molestias.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nam dolor molestias ipsum, vero repellat earum impedit, soluta corrupti explicabo possimus officia cum eius sint magnam amet numquam totam inventore beatae. Nesciunt quidem sit soluta, a ullam illo repudiandae voluptas, at cupiditate eos iure quia laborum amet incidunt minus consequatur necessitatibus enim aperiam quam asperiores provident excepturi debitis? Animi corporis impedit similique iure earum? Fugit quidem aperiam delectus, consequuntur laboriosam nihil, nobis, nam unde quos quisquam voluptatibus? Debitis tenetur ipsa minus optio minima dolorum distinctio totam at aliquid aliquam culpa tempore, expedita dolorem explicabo iusto deserunt ut saepe hic! Cumque.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage

