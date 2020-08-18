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
      <StyledLink to={p.route} activeClassName="active" title={p.page}>
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
  font-family: "Montserrat", sans-serif;
  font-size: 32px;
  font-weight: 300;
  margin-right: 30px;
  text-decoration: none;
  display: inline-block;
  color: #1c3144;
  &.active {
    border-bottom: 2px solid #1c3144;
    font-weight: 700;
  }
  &:hover {
    font-weight: 700;
  }
  &::after {
    display: block;
    content: attr(title);
    font-weight: 700;
    height: 1px;
    color: transparent;
    overflow: hidden;
    visibility: hidden;
  }

  &:visited {
    color: #1c3144;
  }
`
