import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const pages = [
  { page: "Home", route: "/" },
  { page: "Work", route: "/work" },
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
  font-size: 25px;
  margin-left: 10px;
`

const StyledLink = styled(Link)`
  margin-right: 30px;
  text-decoration: none;
  &.active {
    border-bottom: 2px solid black;
  }
`
