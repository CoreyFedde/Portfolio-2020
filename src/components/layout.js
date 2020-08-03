import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Grid from "styled-components-grid"
import Edges from "./Edges"
import AnimatedPage from "./AnimatedPage"

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
    xl: 1200,
    xxl: 1800,
  },
}

const Layout = ({ children }) => {
  return (
    <LayoutStyles>
      {console.log("children", children)}
      <Location>{({ location }) => <SideBar location={location} />}</Location>
      <Edges>
        <FlexFrame>
          <MainSpace>
            <Backdrop>
              <Menu />
            </Backdrop>
            <AnimatedPage>{children}</AnimatedPage>
          </MainSpace>
        </FlexFrame>
      </Edges>
      <InfoBar>Corey Fedde</InfoBar>
    </LayoutStyles>
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
`

const MainSpace = styled.main`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`

const Backdrop = styled.div`
  background: yellow;
  width: 900px;
`

const FlexFrame = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`

const Page = styled.div`
  width: 900px;
  height: 900px;
  left: calc(50% - 450px);
  position: absolute;
  background-color: lightgrey;
  box-shadow: -20px 26px 2px 7px rgba(0, 0, 255, 0.2);
  margin: 50px 30px;
  padding: 50px;
`

const Card = styled.div`
  background-color: gray;
  box-shadow: -20px 26px 2px 7px rgba(0, 0, 255, 0.2);
  height: 250px;
  width: 250px;
`

const LayoutStyles = styled.section`
  background: white;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
`

const StyledGrid = styled(Grid)`
  display: flex;
  flex: 1;
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
