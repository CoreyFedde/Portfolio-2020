import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"
import Edges from "./Edges"
import AnimatedPage from "./AnimatedPage"
import breakpoint from "styled-components-breakpoint"

import "./layout.css"
import Menu from "./menu-top"
import SideBar, { MainNav } from "./Sidebar"
import { Location, Router } from "@reach/router"

const theme = {
  breakpoints: {
    xs: 0,
    sm: 576,
    custom2: 600,
    md: 768,
    custom: 887,
    lg: 992,
    xl: 1100,
    xxl: 1300,
  },
}

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <LayoutStyles id="layout">
        <Edges>
          <MainSpace>
            <Location>
              {({ location }) => <SideBar side location={location} />}
            </Location>
            <Backdrop>
              <Header>
                <Menu />
                <Location>
                  {({ location }) => <SideBar location={location} />}
                </Location>
              </Header>
              <AnimatedPage>{children}</AnimatedPage>
            </Backdrop>
          </MainSpace>
        </Edges>
        {/* <InfoBar>Corey Fedde</InfoBar> */}
      </LayoutStyles>
    </ThemeProvider>
  )
}

// When we get to sm, lets render a menu with transition links to do the ink transition
// In the empty html page can we let the user write or something or add some sparkles?

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout

const Header = styled.div`
  background: #4a6fa5;

  ${breakpoint("sm")`
  height: 150px;
  position: relative;
  `}
  ${breakpoint("xl")`
  height: initial;
  background: none;
  `}
`

const InfoBar = styled.div`
  left: 0;
  writing-mode: vertical-rl;
  position: absolute;
  text-orientation: mixed;
  justify-content: flex-end;
  align-items: center;
  width: 64px;
  font-size: 64px;
  bottom: 10px;
  z-index: -1;
  font-weight: 300;
  ${breakpoint("xl")`
    display: block;
  `}
`

const MainSpace = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;

  ${breakpoint("xl")`
  max-width: 90%;
  min-width: 900px;
  `}
`

const Backdrop = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0;
  left: 0;

  ${breakpoint("xl")`
    top: 50px;
    min-width: 900px;
    height: 90%;
  `}
  ${breakpoint("xxl")`
    max-width: 1100px;
    background: transparent;
    height: 100vh;
    position:relative;
  `}
`

const LayoutStyles = styled.section`
  z-index: -2;
  min-height: 100vh;
  display: flex;
  position: relative;
  font-family: "Montserrat", sans-serif;
  font-family: "Raleway", sans-serif;
  color: #1c3144;
`

{
  /* <StyledGrid>
          <Grid.Unit
            size={1 / 5}
            style={{
              backgroundColor: "#4A6FA5",
              display: "flex",
              width: "300px",
              minWidth: "300px",
            }}
          >
            <Location>
              {({ location }) => <SideBar location={location} />}
            </Location>
          </Grid.Unit>
          <Grid.Unit
            size={4 / 5}
            style={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <Menu />
            <AnimatedPage>
              <Page>{children}</Page>
            </AnimatedPage>
          </Grid.Unit>
          <Grid.Unit
            size={0.25 / 5}
            style={{ backgroundColor: "#4A6FA5", display: "flex" }}
          />
        </StyledGrid> */
}
