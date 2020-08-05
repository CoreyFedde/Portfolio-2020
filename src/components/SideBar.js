import React from "react"
import styled from "styled-components"
import { pages } from "./menu-top"
import _ from "lodash"
import breakpoint from "styled-components-breakpoint"

const SideBar = ({ location, side }) => {
  const title = _.find(pages, { route: `${location.pathname}` })
  return side ? (
    <SideNav side={side}>{title.page || "test"}</SideNav>
  ) : (
    <MainNav side={side}>{title.page || "test"}</MainNav>
  )
}

export default SideBar

export const SideNav = styled.div`
  left: 0;
  writing-mode: vertical-rl;
  position: absolute;
  text-orientation: mixed;
  justify-content: flex-end;
  align-items: center;
  width: 64px;
  font-size: 64px;
  bottom: 0;
  display: none;
  ${breakpoint("xl")`
  display: flex;
  `}
  // ${props => (props.side ? "max-width: 75%; width: 1000px" : "")};
`

export const MainNav = styled.div`
  background: blue;
  display: block;
  ${breakpoint("xl")`
  display: none;
  `}
`

const VerticalLine = styled.div`
  border-left: 6px solid grey;
  height: 500px;
  position: absolute;
  right: 10px;
  margin-left: -3px;
  top: calc(50% - 250px);
`
