import React from "react"
import styled, { ThemeProvider } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Title,
  Description,
  TitleContainer,
} from "../components/TypographyStyledComponents"
import {
  ImageDiv,
  StyledButtonLink,
} from "../components/FunctionalStyledComponents"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <InnerContainer>
      <TitleContainer>
        <Title>Corey Fedde</Title>
      </TitleContainer>
      <MainContent>
        <div>
          <Self />
          <Description>
            Me at 3. Upset you haven't clicked a link yet.
          </Description>
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

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const Self = styled(ImageDiv)`
  background-image: url(https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/19601132_10209567736055018_7797898590057065444_n.jpg?_nc_cat=105&_nc_sid=8bfeb9&_nc_ohc=g2EYxHR3QacAX8-KseI&_nc_ht=scontent.fbed1-1.fna&oh=a539fe566d0bc796b7acf360c8c0940c&oe=5F61067B);
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
