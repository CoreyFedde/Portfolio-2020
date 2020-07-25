import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Grid from "styled-components-grid"
import Edges from "./Edges"

import "./layout.css"
import Menu from "./menu-top"
import SideBar from "./Sidebar"
import Transition from "./Transition"

const Layout = ({ children, location }) => {
  return (
    <LayoutStyles>
      <Edges>
        <StyledGrid>
          <Grid.Unit size={2 / 5} style={{ backgroundColor: "yellow" }}>
            <SideBar />
          </Grid.Unit>
          <Grid.Unit
            size={3 / 5}
            style={{
              backgroundColor: "yellow",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Menu />
            <Transition location={location}>{children}</Transition>
          </Grid.Unit>
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
  background-color: white;
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
  padding-top: 120px;
  min-height: 100vh;
  background: white;
`

const StyledGrid = styled(Grid)`
  //   height: 100%;
`
