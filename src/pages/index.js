import React from "react"
import styled, { ThemeProvider } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

import Slider, { Box } from "../components/slider"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <InnerContainer>
      <Title>Corey Fedde</Title>
      <MainContent>
        <div>
          <Self />
          <SelfDescription>
            Me at 3. Upset you haven't clicked a link yet.
          </SelfDescription>
        </div>
        <LinkContainer>
          <StyledButtonLink to="/work">Link to my work</StyledButtonLink>
          <StyledButtonLink to="/contact">
            Link to my contact page
          </StyledButtonLink>
          <StyledButtonLink>Link to my resume</StyledButtonLink>
        </LinkContainer>
      </MainContent>
    </InnerContainer>
  </Layout>
)

export default IndexPage

const Title = styled.h2`
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  font-size: 96px;
  color: #1c3144;
  text-align: center;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const SelfDescription = styled.h5`
  font-family: Montserrat, sans-serif;
  font-size: 24px;
  margin-top: 30px;
  max-width: 400px;
  font-weight: 400;
`

const Self = styled.div`
  background: url(https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/19601132_10209567736055018_7797898590057065444_n.jpg?_nc_cat=105&_nc_sid=8bfeb9&_nc_ohc=g2EYxHR3QacAX8-KseI&_nc_ht=scontent.fbed1-1.fna&oh=a539fe566d0bc796b7acf360c8c0940c&oe=5F61067B);
  background-size: cover;
  background-position: center;
  height: 400px;
  width: 400px;
  box-shadow: -20px 26px 2px 7px rgba(88, 163, 240, 0.2);
  border: 20px solid #ffffff;
`

const StyledButtonLink = styled(Link)`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 310px;
  margin-bottom: 40px;
  box-shadow: -12px 15px 2px 7px rgba(88, 163, 240, 0.2);
  color: #1c3144;
  text-decoration: none;
  font-family: "Raleway", sans-serif;
  font-size: 24px;
  font-weight: 600;

  &:hover {
    box-shadow: -12px 15px 2px 7px rgba(88, 163, 240, 0.5);
    font-weight: 700;
  }
`

const MainContent = styled.div`
  display: flex;
`

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  flex: 1;
`
