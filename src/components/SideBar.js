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
  writing-mode: vertical-rl;
  position: relative;
  text-orientation: mixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 300px;
  font-size: 64px;
  background: yellow;
`

const VerticalLine = styled.div`
  border-left: 6px solid grey;
  height: 500px;
  position: absolute;
  right: 10px;
  margin-left: -3px;
  top: calc(50% - 250px);
`
