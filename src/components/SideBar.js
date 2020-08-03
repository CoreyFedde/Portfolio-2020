import React from "react"
import styled from "styled-components"
import { pages } from "./menu-top"
import _ from "lodash"

const SideBar = ({ location }) => {
  const title = _.find(pages, { route: `${location.pathname}` })
  return <MainNav>{title.page || "test"}</MainNav>
}

export default SideBar

const MainNav = styled.div`
  left: 0;
  writing-mode: vertical-rl;
  position: absolute;
  text-orientation: mixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 64px;
  font-size: 64px;
  background: white;
  bottom: 0;
`

const VerticalLine = styled.div`
  border-left: 6px solid grey;
  height: 500px;
  position: absolute;
  right: 10px;
  margin-left: -3px;
  top: calc(50% - 250px);
`
