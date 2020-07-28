import React from "react"
import styled from "styled-components"

const PageCover = ({ children, path }) => <Page path={path}>{children}</Page>

const Page = styled.div`
  background-color: white;
  box-shadow: -20px 26px 2px 7px rgba(0, 0, 255, 0.2);
  margin: 50px;
  padding: 50px;
`

export default PageCover
