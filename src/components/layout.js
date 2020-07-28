import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Grid from "styled-components-grid"
import Edges from "./Edges"
import Slide from "./Slide"

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
      <Edges>
        <StyledGrid>
          <Grid.Unit
            size={0.75 / 5}
            style={{ backgroundColor: "yellow", display: "flex" }}
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
            <Slide>
              <Page>{children}</Page>
            </Slide>
          </Grid.Unit>
          <Grid.Unit
            size={0.25 / 5}
            style={{ backgroundColor: "yellow", display: "flex" }}
          />
        </StyledGrid>
      </Edges>
    </LayoutStyles>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout

const Page = styled.div`
  background-color: lightgrey;
  box-shadow: -20px 26px 2px 7px rgba(0, 0, 255, 0.2);
  margin: 50px;
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
`

const StyledGrid = styled(Grid)`
  display: flex;
  flex: 1;
`
