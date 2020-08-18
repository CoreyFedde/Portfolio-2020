import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Title, SubTitle } from "../components/TypographyStyledComponents"
import {
  ImageDiv,
  StyledButtonLink,
} from "../components/FunctionalStyledComponents"

const AboutPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Title>Let's Create Together</Title>
    <SubTitle>... Or just drink coffee</SubTitle>
    <p>Email: Coreysfedde@gmail.com</p>
    <StyledButtonLink>Download Resume</StyledButtonLink>
    <p>Github</p>
    <p>LinkedIn</p>
    <ImageDiv>Map</ImageDiv>
  </Layout>
)

export default AboutPage
