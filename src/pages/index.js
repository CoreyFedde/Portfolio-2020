import React from "react"
import styled, { ThemeProvider } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider, { Box } from "../components/slider"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Title>Corey Fedde</Title>
  </Layout>
)

export default IndexPage

const Title = styled.h2`
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  font-size: 96px;
  color: #1c3144;
  text-align: center;
`
