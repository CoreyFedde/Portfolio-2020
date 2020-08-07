import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const pages = [
  { page: "Work", route: "/" },
  { page: "About", route: "/about" },
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
  margin: 25px 30px;
`

const StyledLink = styled(Link)`
  margin-right: 30px;
  text-decoration: none;
  &.active {
    border-bottom: 2px solid black;
  }
`
