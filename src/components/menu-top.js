import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const pages = [
  { page: "Home", route: "/" },
  { page: "Work", route: "/work" },
  { page: "About", route: "/about" },
  { page: "Contact", route: "/contact" },
]

const Menu = () => (
  <MenuWrap>
    {pages.map(p => (
      <StyledLink to={p.route} activeClassName="active">
        {p.page}
      </StyledLink>
    ))}
  </MenuWrap>
)

export default Menu

const MenuWrap = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledLink = styled(Link)`
  flex: 1;
  .active {
    border-bottom: 2px solid black;
  }
`
