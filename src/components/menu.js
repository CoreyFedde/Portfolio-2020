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
  background-color: white;
  flex: 1;
  order: 100;
  div {
    position: absolute;
    bottom: 50%;
    right: 10%;

    transform-origin: 100% 100%;
    transform: rotate(90deg);
  }
`

const StyledLink = styled(Link)`
  height: 0;
  transition: height 1s;
  &:hover {
    background-color: blue;
  }

  ${MenuWrap}:hover & {
    height: 40px;
    transition: height 1s;
  }
`
