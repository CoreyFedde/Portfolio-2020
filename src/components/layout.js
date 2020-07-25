import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Grid from "styled-components-grid"
import Edges from "./Edges"
import PageTransition from "gatsby-plugin-page-transitions"

import "./layout.css"
import Menu from "./menu-top"
import SideBar from "./Sidebar"
import { useLocation } from "@reach/router"
import Transition from "./Transition"

const Layout = ({ children }) => {
  const { pathname } = useLocation()
  return (
    <LayoutStyles>
      {console.log("location 2", pathname)}
      <Edges>
        <StyledGrid>
          <Grid.Unit size={2 / 5} style={{ backgroundColor: "yellow" }}>
            <SideBar pathname={pathname} />
          </Grid.Unit>
          <Grid.Unit
            size={3 / 5}
            style={{
              backgroundColor: "yellow",
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <Menu />
            <PageTransition
              location={pathname}
              defaultStyle={{
                transition: "left 250ms cubic-bezier(0.47, 0, 0.75, 0.72)",
                top: "100px",
                left: "50%",
                position: "absolute",
                width: "100%",
              }}
              transitionStyles={{
                entering: { left: "0%" },
                entered: { left: "0%" },
                exiting: { left: "100%" },
              }}
              transitionTime={250}
            >
              <Page>{children}</Page>
            </PageTransition>
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
