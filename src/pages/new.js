import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./test.css"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>This is a new page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
