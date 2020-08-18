import React from "react"
import styled from "styled-components"
import { pages } from "./menu-top"
import _ from "lodash"
import breakpoint from "styled-components-breakpoint"

const SideBar = ({ location, side }) => {
  const title = _.find(pages, { route: `${location.pathname}` })
  return side ? (
    <SideNav>{title.page || "test"}</SideNav>
  ) : (
    <MainNav>{title.page || "test"}</MainNav>
  )
}

export default SideBar

export const SideNav = styled.div`
  display: none;
  width: 400px;
  min-width: 300px;
  line-height: 100px;
  background: #4a6fa5;
  height: 75vh;
  min-height: 600px;
  top: 50px;
  position: relative;

  justify-content: flex-start;
  align-items: center;
  color: #f5f4f5;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 240px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  text-transform: uppercase;
  // mix-blend-mode: screen; // could be a cool option

  ${breakpoint("xl")`
  display: flex;
  `}
`

const FloatingText = styled.h1``

export const MainNav = styled.div`
  display: block;
  position: absolute;
  right: 0;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 100px;
  color: #f5f4f5;
  line-height: 100px;
  bottom: 0;
  text-transform: uppercase;
  ${breakpoint("xl")`
  display: none;
  `}
`

// export const SideNav = styled.div`
//   display: none;
//   width: 200px;
//   font-size: 100px;
//   line-height: 100px;
//   // position: absolute;
//   // left: 0;
//   // bottom: 0;
//   writing-mode: vertical-rl;
//   text-orientation: mixed;
//   transform: rotate(180deg);
//   z-index: -1;
//   background: blue;
//   height: 80%;
//   top: 50px;
//   position: relative;
//   ${breakpoint("xl")`
//   display: flex;
//   `}
// `
