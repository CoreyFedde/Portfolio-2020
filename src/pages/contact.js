import React from "react"
import styled, { ThemeProvider } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Title,
  SubTitle,
  Description,
} from "../components/TypographyStyledComponents"
import {
  ImageDiv,
  StyledButtonLink,
} from "../components/FunctionalStyledComponents"

const AboutPage = () => {
  const iframe = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11795.7932484598!2d-71.11146708702957!3d42.34362535272466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8563b9de9592a136!2sTatte%20Bakery%20%26%20Cafe!5e0!3m2!1sen!2sus!4v1597800377488!5m2!1sen!2sus" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
  const getMap = () => {
    return { __html: iframe }
  }
  return (
    <Layout>
      <SEO title="Page two" />
      <InnerContainer>
        <TitleContainer>
          <Title>Let's Create Together</Title>
          <SubTitle>... Or just drink coffee</SubTitle>
        </TitleContainer>
        <InfoContainer>
          <ContactLinkContainer>
            <StyledButtonLink style={{ flex: 1, marginRight: "25px" }}>
              Email: Coreysfedde@gmail.com
            </StyledButtonLink>
            <StyledButtonLink style={{ flex: 1, marginRight: "25px" }}>
              Download Resume
            </StyledButtonLink>
            <div>
              <Icon src="https://image.flaticon.com/icons/svg/25/25231.svg" />
              <Icon src="https://image.flaticon.com/icons/svg/174/174857.svg" />
            </div>
          </ContactLinkContainer>
          <MapContainer>
            <Map dangerouslySetInnerHTML={getMap()} id="map" />
            <MapDescription>Favorite Coffee Place</MapDescription>
          </MapContainer>
        </InfoContainer>
      </InnerContainer>
    </Layout>
  )
}

const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Map = styled.div`
  border: 20px solid #ffffff;
  box-shadow: -12px 15px 2px 7px rgba(88, 163, 240, 0.2);
  iframe {
    margin: 0;
  }
`

const MapDescription = styled(Description)`
  text-align: center;
  display: block;
  width: 100%;
  max-width: 100%;
`

const TitleContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  text-align: center;
`

const InfoContainer = styled(TitleContainer)`
  flex: 3;
`

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const ContactLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 20px;
  flex: 1;
`
const Icon = styled.img`
  width: 50px;
  height: 50px;
`

export default AboutPage
