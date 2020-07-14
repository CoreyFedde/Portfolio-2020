import React from "react"

const MenuLink = ({ children, active }) => {
  const activeLink = (
    <div style={{ backgroundColor: "red", flex: "1" }}>{children}</div>
  )
  return active ? (
    activeLink
  ) : (
    <div style={{ backgroundColor: "blue", height: "40px" }}>{children}</div>
  )
}

export default MenuLink
