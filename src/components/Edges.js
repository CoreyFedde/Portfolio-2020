import React from "react"
import styled from "styled-components"

export default function Edges(props) {
  const { children, ...otherProps } = props
  return <Section {...otherProps}>{props.children}</Section>
}

const Section = styled.section`
  width: 1800px;
  max-width: 90%;
  margin: 0 auto;
  // height: 70vh;
  display: flex;
  ${props => (props.medium ? "max-width: 75%; width: 1000px" : "")};
`
