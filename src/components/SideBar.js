import React from "react"
import styled from "styled-components"

const SideBar = ({ pathname }) => (
  <MainNav>
    {pathname || "test"}
    <VerticalLine />
  </MainNav>
)

export default SideBar

const MainNav = styled.div`
  height: 100%;
  writing-mode: vertical-rl;
  position: relative;
  text-orientation: mixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  font-size: 64px;
`

const VerticalLine = styled.div`
  border-left: 6px solid grey;
  height: 500px;
  position: absolute;
  right: 10px;
  margin-left: -3px;
  top: calc(50% - 250px);
`
