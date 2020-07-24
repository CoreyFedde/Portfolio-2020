/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Grid from "styled-components-grid"
import Edges from "../components/Edges"

import "./layout.css"
import Menu from "./menu"

const Layout = ({ children }) => {
  console.log("rendering?")
  return (
    <LayoutStyles>
      <Edges>
        <StyledGrid>
          <Grid.Unit size={1 / 5}>
            <Menu />
          </Grid.Unit>
          <Grid.Unit size={4 / 5} style={{ backgroundColor: "yellow" }}>
            {children}
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

const LayoutStyles = styled.section`
  padding-top: 120px;
  min-height: 100vh;
  background: white;
`

const Content = styled.main`
  width: 100%;
`

const StyledGrid = styled(Grid)`
  height: 100%;
`
