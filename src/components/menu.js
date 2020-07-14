import React from "react"
import { Link } from "gatsby"
import Header from "./header"
import MenuLink from "./menu-link"

const Menu = ({ data }) => {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          backgroundColor: "Green",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <MenuLink active>
          <Link to="/">HOME</Link>
        </MenuLink>
        <MenuLink>
          <Link to="/page-2/">Go to page 2</Link>
        </MenuLink>
        <MenuLink>
          <Link to="/new/">GO TO NEW</Link>
        </MenuLink>
      </div>
    </div>
  )
}

export default Menu
