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
display: none;
width: 100px;
font-size: 100px;
line-height: 100px;
position: absolute;
right: 0;
top: 10px;
writing-mode: vertical-rl;
text-orientation: mixed;
transform: rotate(180deg);
z-index: -1;
  ${breakpoint("xl")`
  display: flex;
  `}
  // ${props => (props.side ? "max-width: 75%; width: 1000px" : "")};
`

export const MainNav = styled.div`
  display: block;
  position: absolute;
  right: 0;
  font-size: 100px;
  line-height: 100px;
  bottom: 0;
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
