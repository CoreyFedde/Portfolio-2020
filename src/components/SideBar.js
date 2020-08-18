import React, { useEffect, useState } from "react"
import styled from "styled-components"
import classNames from "classnames"
import { pages } from "./menu-top"
import _ from "lodash"
import breakpoint from "styled-components-breakpoint"

const SideBar = ({ location, side }) => {
  const title = _.find(pages, { route: `${location.pathname}` })
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  })
  return side ? (
    <SideNav>
      <Wrap>
        <FloatingText className={`${mounted ? "transform" : ""}`}>
          {title.page || "test"}
        </FloatingText>
      </Wrap>
    </SideNav>
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

  justify-content: center;
  align-items: flex-start;

  ${breakpoint("xl")`
  display: flex;
  `}
`

const Wrap = styled.div`
  position: relative;
  overflow: hidden;
`

const FloatingText = styled.h1`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  text-transform: uppercase;
  // mix-blend-mode: screen; // could be a cool option
  color: #f5f4f5;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 240px;
  transform: translateX(-240px);
  &.transform {
    transform: translateX(0);
    transition: all 0.5s ease 0.5s;
  }
`

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
