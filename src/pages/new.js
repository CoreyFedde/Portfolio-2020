import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import "./test.css"

const SecondPage = () => (
  <>
    <SEO title="Page two" />
    <h1>This is a new page</h1>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default SecondPage
