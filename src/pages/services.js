import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicesPage = () => (
  <Layout>
    <SEO title="About Page" />
    <h1>Services Page</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, neque. Consequuntur expedita sequi rem sunt!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, neque. Consequuntur expedita sequi rem sunt!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, neque. Consequuntur expedita sequi rem sunt!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ServicesPage

