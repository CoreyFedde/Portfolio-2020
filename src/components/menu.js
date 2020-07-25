import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Location } from "@reach/router"

const pages = [
  { page: "Home", route: "/" },
  { page: "Work", route: "/work" },
  { page: "About", route: "/about" },
  { page: "Contact", route: "/contact" },
]

const MenuLink = ({ children, active, to, isHovered, className, state }) => {
  const activeLink = (
    <Active>
      <div>{children}</div>
    </Active>
  )

  return active ? (
    activeLink
  ) : (
    <StyledLink
      isHovered={isHovered}
      to={to}
      className={className}
      state={state}
    >
      {children}
    </StyledLink>
  )
}

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isHovered: false, isClicked: false }
  }

  render() {
    console.log("rendered", this.state)
    return (
      <MenuWrap>
        <Location>
          {({ location }) =>
            pages.map(p => (
              <MenuLink
                to={p.route}
                active={p.route === location.pathname}
                style={p.page === location.pathname ? { order: "4" } : {}}
              >
                {p.page}
              </MenuLink>
            ))
          }
        </Location>
      </MenuWrap>
    )
  }
}

export default Menu

const MenuWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`
const Active = styled.div`
  position: relative;
  background: white;
  flex: 1;
  order: 100;
  z-index: 1;

  div {
    position: absolute;
    bottom: 50%;
    right: 10%;

    transform-origin: 100% 100%;
    transform: rotate(90deg);
  }
  &:after {
    width: 0%;
    height: 100%;
    top: 0;
    right: 0;
    background: yellow;
    content: "";
    position: absolute;
    z-index: -1;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 1s 1s;
  }

  ${MenuWrap}:hover &:after {
    width: 100%;
  }
  ${MenuWrap}:not(:hover) &:after {
    transition: all 0.3s;
  }
`

const StyledLink = styled(Link)`
  height: 0;
  transition: height 1s;
  position: relative;
  z-index: 0;

  &:before {
    width: 0%;
    height: 100%;
    top: 0;
    left: 0;
    background: blue;
    content: "";
    position: absolute;
    z-index: -1;
  }

  &:after {
    width: 0%;
    height: 100%;
    top: 0;
    right: 0;
    background: yellow;
    content: "";
    position: absolute;
    z-index: -2;
  }

  ${MenuWrap}:hover & {
    height: 40px;
    transition: height 1s, background 0.1s 2s;
    background: yellow;
  }

  ${MenuWrap}:hover &:after {
    width: 100%;
    transition: width 1s 1s;
    background: yellow;
  }

  &:hover {
    background: yellow;
  }

  &:hover:before {
    width: 100%;
    left: 0;
    transition: width 0.3s;
  }
`
