import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"
import Edges from "./Edges"
import AnimatedPage from "./AnimatedPage"
import breakpoint from "styled-components-breakpoint"

import "./layout.css"
import Menu from "./menu-top"
import SideBar from "./Sidebar"
import { Location, Router } from "@reach/router"

const theme = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1100,
    xxl: 1300,
  },
}

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <LayoutStyles>
        {console.log("children", children)}
        <Location>{({ location }) => <SideBar location={location} />}</Location>
        <Edges>
          <MainSpace>
            <Backdrop>
              <Menu />
              <AnimatedPage>{children}</AnimatedPage>
            </Backdrop>
          </MainSpace>
        </Edges>
        <InfoBar>Corey Fedde</InfoBar>
      </LayoutStyles>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout

const InfoBar = styled.div`
  width: 64px;
  position: absolute;
  right: 0;
  top: 0;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  font-size: 64px;
  z-index: -1;
`

const MainSpace = styled.main`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  max-width: 80%;
  min-width: 900px;
`

const Backdrop = styled.div`
  background: yellow;
  min-width: 900px;
  flex: 1;
  left: 5%;
  display: flex;
  flex-direction: column;
  position: relative;
  ${breakpoint("xl")`
    background: white;
  `}
  ${breakpoint("xxl")`
    background: yellow;
  `}
`

const LayoutStyles = styled.section`
  z-index: -2;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;

  ${breakpoint("xl")`
    background: yellow;
  `}

  ${breakpoint("xxl")`
  background: white;
`}
`

{
  /* <StyledGrid>
          <Grid.Unit
            size={1 / 5}
            style={{
              backgroundColor: "yellow",
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
            style={{ backgroundColor: "yellow", display: "flex" }}
          />
        </StyledGrid> */
}
