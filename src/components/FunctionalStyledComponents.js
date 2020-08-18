import styled from "styled-components"
import { Link } from "gatsby"

export const ImageDiv = styled.div`
  background-size: cover;
  background-position: center;
  height: 400px;
  width: 400px;
  box-shadow: -20px 26px 2px 7px rgba(88, 163, 240, 0.2);
  border: 20px solid #ffffff;
`

export const StyledButtonLink = styled(Link)`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 310px;
  margin-bottom: 40px;
  box-shadow: -12px 15px 2px 7px rgba(88, 163, 240, 0.2);
  color: #1c3144;
  text-decoration: none;
  font-family: "Raleway", sans-serif;
  font-size: 24px;
  font-weight: 600;

  &:hover {
    box-shadow: -12px 15px 2px 7px rgba(88, 163, 240, 0.5);
    font-weight: 700;
  }
`
